import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";
import { Route, Switch } from "react-router-dom";
import MyGoogleMap from './MyGoogleMap';


export default class AddRestaurant extends Component {
    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeWebsite = this.onChangeWebsite.bind(this)
        this.onChangeAddress = this.onChangeAddress.bind(this)
        this.onChangeCity = this.onChangeCity.bind(this)
        // this.onChangeZipCode = this.onChangeZipCode.bind(this)
        this.saveRestaurant = this.saveRestaurant.bind(this)
        this.newRestaurant = this.newRestaurant.bind(this)

        this.state = {
            user: localStorage.getItem('id'),
            name: "",
            website: "",
            address: "",
            city: "",
            // zip_code: null,

            submitted: false
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeWebsite(e) {
        this.setState({
            website: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeCity(e) {
        this.setState({
            city: e.target.value
        })
    }

    // onChangeZipCode(e) {
    //     this.setState({
    //         zip_code: e.target.value
    //     })
    // }

    saveRestaurant() {
        const data = {
            user: localStorage.getItem('id'), 
            name: this.state.name,
            website: this.state.website,
            address: this.state.address,
            city: this.state.city
        };

        RestaurantDataService.create(data)
            .then(response => {
                this.setState({
                    user: localStorage.getItem('id'),
                    name: response.data.name,
                    website: response.data.website,
                    address: response.data.address,
                    city: response.data.city,
                    
                    submitted: true
                });
                console.log("response ", response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newRestaurant() {
        this.setState({
            user: localStorage.getItem('id'),
            name: "",
            website: "",
            address: "",
            city: "",

            submitted: false
        });
    }

    render() {
        return (
            <div className="submit=form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newRestaurant}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="name">Restaurant Name</label>
                            <input 
                                type="text"
                                className="formControl"
                                id="name"
                                required value={this.state.name}
                                onChange={this.onChangeName}
                                name="name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="website">Website</label>
                            <input 
                                type="text"
                                className="formControl"
                                id="website"
                                required value={this.state.website}
                                onChange={this.onChangeWebsite}
                                name="website"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input 
                                type="text"
                                className="formControl"
                                id="address"
                                required value={this.state.address}
                                onChange={this.onChangeAddress}
                                name="address"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input 
                                type="text"
                                className="formControl"
                                id="city"
                                required value={this.state.city}
                                onChange={this.onChangeCity}
                                name="city"
                            />
                        </div>

                        {/* <div className="form-group">
                            <label htmlFor="city">Zip Code</label>
                            <input 
                                type="text"
                                className="formControl"
                                id="zip_code"
                                required value={this.state.zip_code}
                                onChange={this.onChangeZipCode}
                                name="zip_code"
                            />
                        </div> */}

                        <button onClick={this.saveRestaurant} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
                <Switch>
                    <div className="main-wrapper">
                        <Route exact path="/add" component={MyGoogleMap} />
                    </div>
                </Switch>
            </div>
        );
    }
}