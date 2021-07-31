import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";
import { Link } from "react-router-dom";

export default class RestaurantList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchCity = this.onChangeSearchCity.bind(this);
        this.retrieveRestaurants = this.retrieveRestaurants.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveRestaurant = this.setActiveRestaurant.bind(this);
        this.searchCity = this.searchCity.bind(this);

        this.state = {
            restaurants: [],
            currentRestaurant: null,
            currentIndex: -1,
            searchCity: ""
        };
    }

    componentDidMount() {
        this.retrieveRestaurants();
    }

    onChangeSearchCity(e) {
        const searchCity = e.target.value;

        this.setState({
            searchCity: searchCity
        });
    }

    retrieveRestaurants() {
        RestaurantDataService.getAll()
            .then(response => {
                this.setState({
                    restaurants: response.data
                });
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveRestaurants();
        this.setState({
            currentRestaurant: null,
            currentIndex: -1
        });
    }

    setActiveRestaurant(restaurant, index) {
        this.setState({
            currentRestaurant: restaurant,
            currentIndex: index
        });
    }

    searchCity() {
        RestaurantDataService.findByCity(this.state.searchCity)
            .then(response => {
                this.setState({
                    restaurants: response.data
                });
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            });
    }


    render() {
        const { searchCity, restaurants, currentRestaurant, currentIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Search by city"
                            value={searchCity}
                            onChange={this.onChangeSearchCity}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchCity}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Restaurant List</h4>
                    <ul className="list-group">
                        {restaurants &&
                            restaurants.map((restaurant, index) => (
                                <li
                                    className={
                                        "list-group-item " +
                                        (index === currentIndex ? "active" : "")
                                    }
                                    onClick={() => this.setActiveRestaurant(restaurant, index)}
                                    key={index}>
                                    {restaurant.name}
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="col=md-6">
                    {currentRestaurant ? (
                        <div>
                            <h4>Restaurant</h4>
                            <div>
                                <label>
                                    <strong>Name:</strong>
                                </label>{" "}
                                {currentRestaurant.name}
                            </div>
                            <div>
                                <label>
                                    <strong>Website:</strong>
                                </label>{" "}
                                {currentRestaurant.website}
                            </div>
                            <div>
                                <label>
                                    <strong>Address:</strong>
                                </label>{" "}
                                {currentRestaurant.address}
                            </div>
                            <div>
                                <label>
                                    <strong>City:</strong>
                                </label>{" "}
                                {currentRestaurant.city}
                            </div>

                            <Link
                                to={"/restaurants/" + currentRestaurant.id}
                                className="badge badge-success">
                                Edit
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Restaurant...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}