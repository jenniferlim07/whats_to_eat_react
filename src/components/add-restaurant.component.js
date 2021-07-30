import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";

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
            id: null,
            name: "",
            website: "",
            address: "",
            city: "",

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

    saveRestaurant() {
        const data = {
            name: this.state.title,
            // website: this.state.website
        };

        RestaurantDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    website: response.data.title,
                    address: response.data.address,
                    city: response.data.city,
                    
                    submitted: true
                });
                console.log(response.data);
            })
            .cattch(e => {
                console.log(e);
            });
    }

    newRestaurant() {
        this.setState({
            id: null,
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
                                type="address"
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

                        <button onClick={this.saveRestaurant} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}