import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";

export default class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.getRestaurant = this.getRestaurant.bind(this);
        this.updateRestaurant = this.updateRestaurant.bind(this);
        this.deleteRestaurant = this.deleteRestaurant.bind(this);

        this.state = {
            currentRestaurant: {
                id: null,
                name: "",
                website: "",
                address: "",
                city: "",

            },
            message: ""
        };
    }

    componentDidMount() {
        this.getRestaurant(this.props.match.params.id);
    }

    onChangeName(e) {
        const name = e.target.value;

        this.setState(prevState => ({
                currentRestaurant: {
                    ...prevState.currentRestaurant,
                    name: name
            }
        }));
    }

    onChangeWebsite(e) {
        const website = e.target.value

        this.setState(prevState => ({
            currentRestaurant: {
                ...prevState.currentRestaurant,
                website: website
            }
        }));
    }

    onChangeAddress(e) {
        const address = e.target.value
        
        this.setState(prevState => ({
            currentRestaurant: {
                ...prevState.currentRestaurant,
                address: address
            }
        }));
    }

    onChangeCity(e) {
        const city = e.target.value

        this.setState(prevState => ({
            currentRestaurant: {
                ...prevState.currentRestaurant,
                city: city
            }
        }));
    }

    getRestaurant(id) {
        RestaurantDataService.get(id)
            .then(response => {
                this.setState({
                    currentRestaurant: response.data
                });
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateRestaurant() {

        RestaurantDataService.update(
            this.state.currentRestaurant.id, 
            this.state.currentRestaurant
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The restaurant was update successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    deleteRestaurant() {
        RestaurantDataService.delete(this.state.currentRestaurant.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push("/restaurants")
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { currentRestaurant } = this.state

        return (
            <div>
                {currentRestaurant ? (
                    <div className="edit-form">
                        <h4>Restaurant</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={currentRestaurant.name}
                                    onChange={this.onChangeName}
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
                        </form>

                        <button
                            type="submit"
                            className="badge badge-success"
                            onClick={this.updateRestaurant}>
                            Update
                        </button>

                        <button
                            type="submit"
                            className="badge badge=danger mr-2"
                            onClick={this.deleteRestaurant}>
                            Delete
                        </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Click on a Restaurant</p>
                    </div>
                )}
            </div>
        );
    }
}