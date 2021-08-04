import React, { Component } from "react";
import {
    InfoWindow,
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import { Descriptions } from 'antd';
import AutoComplete from "react-google-autocomplete";

// import GoogleMapReact from 'google-map-react';
// import AutoComplete from './Autocomplete';

Geocode.setApiKey("AIzaSyBaOc-kpmUetfkxEQc60qXzA_p4FZvOmUY")

export default class Maps extends Component {

    state = {
        address: '',
        city: '',
        state: '',
        zoom: 15,
        height: 400,
        mapPosition: {
            lat: 47.608013,
            lng: -122.335167,
        },
        markerPosition: {
            lat: 47.608013,
            lng: -122.335167,
        }
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                mapPosition: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                },
                markerPosition: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                }
                }, () => {
                Geocode.fromLatLng(position.coords.latitude, position.coords.longitude)
                .then(response => {
                    console.log('response ', response)
                    const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    city = this.getCity(addressArray),
                    state =this.getState(addressArray)
            
                    this.setState({
                    address: (address) ? address : "",
                    city: (city) ? city : "",
                    state: (state) ? state : "",
                    })
                })
                })
            })
            }
        }

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


    onMarkerDragEnd = (event) => {
        let newLat = event.latLng.lat();
        let newLng = event.latLng.lng();
    
        Geocode.fromLatLng(newLat, newLng)
            .then(response => {
                console.log('response ', response)
                const address = response.results[0].formatted_address,
                addressArray = response.results[0].address_components,
                city = this.getCity(addressArray),
                state =this.getState(addressArray)
        
                this.setState({
                address: (address) ? address : "",
                city: (city) ? city : "",
                state: (state) ? state : "",
                markerPosition : {
                    lat: newLat,
                    lng: newLng
                },
                mapPosition : {
                    lat: newLat,
                    lng: newLng
                },
            })
        },
        error => {
            console.error(error)
        }
    )
    
        console.log('newLat', newLat);
        console.log('newLng', newLng)
    }

    onPlaceSelected = (place) => {
        const address = place.formatted_address,
            addressArray = place.address_components,
            city = this.getCity(addressArray),
            state = this.getState(addressArray),
            newLat = place.geometry.location.lat(),
            newLng = place.geometry.location.lng();
        
            this.setState({
            address: (address) ? address : "",
            city: (city) ? city : "",
            state: (state) ? state : "",
            markerPosition : {
                lat: newLat,
                lng: newLng
            },
            mapPosition : {
                lat: newLat,
                lng: newLng
            },
            })
        }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
            >
                <Marker
                    draggable={true}
                    onDragEnd={this.onMarkerDragEnd}
                    position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}>
                    <InfoWindow>
                        <div>
                            {this.state.city}
                        </div>
                    </InfoWindow>
                </Marker>
                <AutoComplete
                    className="auto-complete"
                    types={['(regions)']}
                    onPlaceSelected={this.onPlaceSelected}
                />
            </GoogleMap>
        ));
        return (
            <div className="descriptions">
                <Descriptions bordered>
                    <Descriptions.Item label="City">{this.state.city}</Descriptions.Item>
                    <Descriptions.Item label="State">{this.state.state}</Descriptions.Item>
                    {/* <Descriptions.Item label="Address">{this.state.address}</Descriptions.Item> */}
                </Descriptions>
                <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBaOc-kpmUetfkxEQc60qXzA_p4FZvOmUY&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        )
    }
}