import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

import styled from 'styled-components';

import AutoComplete from './Autocomplete';
import Marker from './Marker';

import { Descriptions } from 'antd';
import RestaurantDataService from "../services/restaurant.service";

// import AddCuisine from "./add-cuisine";

const API_KEY = process.env.REACT_APP_API_KEY
const Wrapper = styled.main`
    width: 100%;
    height: 100%;
`;



class MyGoogleMap extends Component {
    constructor(props) {
        super(props)
        this.saveRestaurant = this.saveRestaurant.bind(this)
        this.newRestaurant = this.newRestaurant.bind(this)

    }

    state = {
        mapApiLoaded: false,
        mapInstance: null,
        mapApi: null,
        geoCoder: null,
        user: localStorage.getItem('id'),
        places: [],
        restaurant_name: '',
        website: '',
        center: [],
        zoom: 9,
        address: '',
        city: '',
        state: '',
        draggable: true,
        lat: null,
        lng: null,

        submitted: false
    };

    componentWillMount() {
        // this.setCurrentLocation();
        this.setState({
            center: [47.608013, -122.335167],
            lat: 47.608013,
            lng: -122.335167,
        })
    }

    saveRestaurant() {
        const data = {
            user: this.state.user,
            name: this.state.restaurant_name,
            website: this.state.website,
            address: this.state.address,
            city: this.state.city
        };
        // this.autoComplete = new mapApi.places.Autocomplete(
        //     this.state.address,
        // );

        // const auto = this.autoComplete.getPlace()
        console.log("potato ", data)

        RestaurantDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name, 
                    website: response.data.website,
                    address: response.data.address,
                    city: response.data.city,
                    user: this.state.user,

                    submitted: true
                    
                });
                console.log("saveRestaurant ", this.state.submitted)
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newRestaurant() {
        this.setState({
            id: null,
            user: this.state.user,
            name: "",
            website: "",
            address: "",
            city: "",

            submitted: false
        });
        console.log("newRestaurant ", this.submitted)
    }


    onMarkerInteraction = (childKey, childProps, mouse) => {
        this.setState({
            draggable: false,
            lat: mouse.lat,
            lng: mouse.lng
        });
    }
    onMarkerInteractionMouseUp = (childKey, childProps, mouse) => {
        this.setState({ draggable: true });
        this._generateAddress();
    }

    _onChange = ({ center, zoom }) => {
        this.setState({
            center: center,
            zoom: zoom,
        });

    }

    _onClick = (value) => {
        this.setState({
            lat: value.lat,
            lng: value.lng
        });
    }

    apiHasLoaded = (map, maps) => {
        this.setState({
            mapApiLoaded: true,
            mapInstance: map,
            mapApi: maps,
        });

        this._generateAddress();
    };

    addPlace = (place) => {
        console.log("addPlace ", place)
        this.setState({
            places: [place],
            restaurant_name: place.name,
            website: place.website,
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        });
        this._generateAddress()
    };

    getCity = (addressArray) => {
        let city = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0]) {
                for (let j = 0; j < addressArray[i].types.length; j++) {
                    if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
                        city = addressArray[i].long_name;
                        return city;
                    }
                }
            }
        }
    };

    getState = (addressArray) => {
        let state = '';
        for (let i = 0; i < addressArray.length; i++) {
            for (let i = 0; i < addressArray.length; i++) {
                if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
                    state = addressArray[i].long_name;
                    return state;
                }
            }
        }
    };

    _generateAddress() {
        const {
            mapApi
        } = this.state;

        const geocoder = new mapApi.Geocoder;

        geocoder.geocode({ 'location': { lat: this.state.lat, lng: this.state.lng } }, (results, status) => {
            console.log(results);
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    const addressArray = results[0].address_components
                    const city = this.getCity(addressArray)
                    const state = this.getState(addressArray)
                    this.setState({ 
                        address: results[0].formatted_address,
                        city: city,
                        state: state});
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }

        });
    }

    // Get Current Location Coordinates
    // setCurrentLocation() {
    //     if ('geolocation' in navigator) {
    //         navigator.geolocation.getCurrentPosition((position) => {
    //             this.setState({
    //                 center: [position.coords.latitude, position.coords.longitude],
    //                 lat: position.coords.latitude,
    //                 lng: position.coords.longitude
    //             });
    //         });
    //     }
    // }

    render() {
        const {
            places, mapApiLoaded, mapInstance, mapApi,
        } = this.state;


        return (
            <Wrapper>
                {mapApiLoaded && (
                    <div>
                        <h4 className="text-center">Restaurant Search</h4>
                        <AutoComplete className="auto-complete" map={mapInstance} mapApi={mapApi} addplace={this.addPlace} />
                    </div>
                )}
                <GoogleMapReact
                    center={this.state.center}
                    zoom={this.state.zoom}
                    draggable={this.state.draggable}
                    onChange={this._onChange}
                    onChildMouseDown={this.onMarkerInteraction}
                    onChildMouseUp={this.onMarkerInteractionMouseUp}
                    onChildMouseMove={this.onMarkerInteraction}
                    onChildClick={() => console.log('child click')}
                    onClick={this._onClick}
                    bootstrapURLKeys={{
                        key: `${API_KEY}`,
                        libraries: ['places', 'geometry'],
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
                >

                    <Marker
                        text={this.state.address}
                        lat={this.state.lat}
                        lng={this.state.lng}
                    />


                </GoogleMapReact>

                {/* <div className="info-wrapper">
                    <div className="map-details">Restaurant: <span>{this.state.restaurant_name}</span></div>
                    <div className="map-details">Address: <span>{this.state.address}</span></div>
                </div> */}
                <div className="descriptions">
                    <Descriptions bordered>
                        {/* <Descriptions.Item label="City">{this.state.city}</Descriptions.Item> */}
                        {/* <Descriptions.Item label="State">{this.state.state}</Descriptions.Item> */}
                        <Descriptions.Item label="Restaurant">{this.state.restaurant_name}</Descriptions.Item>
                        <br />
                        <Descriptions.Item label="Address">{this.state.address}</Descriptions.Item>
                    </Descriptions>
                </div>
                <div className="submit-form">
                    {this.state.submitted ? (
                        <div>
                            <h4>You submitted successfully!</h4>
                            <button className="btn btn-success" onClick={this.newRestaurant}>
                                Add
                            </button>
                        </div>
                    ) : (
                        <div>
                        <button onClick={this.saveRestaurant} className="btn btn-success">
                            Submit
                        </button>
                        </div>
                    )}


                </div>
            </Wrapper >

        );
    }
}

export default MyGoogleMap;