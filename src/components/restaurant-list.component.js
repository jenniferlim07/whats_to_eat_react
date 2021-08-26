import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
// import Select from 'react-select';

export default class RestaurantList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchCity = this.onChangeSearchCity.bind(this);
        this.retrieveRestaurants = this.retrieveRestaurants.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveRestaurant = this.setActiveRestaurant.bind(this);
        this.searchCity = this.searchCity.bind(this);
        this.retrieveCities = this.retrieveCities.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            user: localStorage.getItem('id'),
            restaurants: [],
            currentRestaurant: null,
            currentIndex: -1,
            searchCity: "",
            cities: []
        };
    }

    componentDidMount() {
        this.retrieveRestaurants();
        this.retrieveCities();
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

    searchCity(event) {
        RestaurantDataService.findByCity(this.state.selectedOption)
            .then(response => {
                this.setState({
                    restaurants: response.data,
                    currentRestaurant: null
                });
                console.log("search city", response.data)
            })
            .catch(e => {
                console.log(e);
            });
        event.preventDefault();
    }

    retrieveCities() {
        RestaurantDataService.getAllCities()
        .then(response => {
            this.setState({
                cities: response.data,
                selectedOption: response.data[0].city,
            });
        })
        .catch(e => {
            console.log(e)
        });
    }

    handleChange = (event) => {
        this.setState({ selectedOption: event.target.value }, () =>
            console.log('Option selected: ', event)
        )
    }

    render() {
        const { restaurants, currentRestaurant, currentIndex } = this.state;

        return (
            <div className="bg">
                <div className="card">
                    <div className="col-md-8">
                        <h5>Restaurants by City</h5>
                        <div className="container">

                            <form onSubmit={this.searchCity}>
                                {/* <Select
                                    value={this.state.selectedOption}
                                    onChange={this.handleChange}
                                    options={
                                    this.state.cities.map((city, index) => {
                                        return {
                                            label: city.city,
                                            value: city
                                            // key: index
                                        }
                                    })
                                }
                                /> */}
                                <select className="form-select form-select-lg mb-3"
                                    value={this.state.selectedOption}
                                    onChange={this.handleChange}>
                                    {this.state.cities.map((city, index) => (                                      
                                        <option key={index} value={city.city}>{city.city}</option>
                                    ))}
                                </select>
                                    
                                {/* <input type="submit" value="Submit" /> */}
                                <button className="submitBtn" type="submit" value="Submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-8">
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
                                    <a target='_blank' href={currentRestaurant.website}>{currentRestaurant.website}</a>
                                    
                                </div>
                                <div>
                                    <label>
                                        <strong>Address:</strong>
                                    </label>{" "}
                                    {currentRestaurant.address}
                                </div>

                                <ul>
                                    <label>
                                        <strong>Cuisines:</strong>
                                    </label>
                                    {/* {currentTutorial.category} */}
                                    {currentRestaurant.cuisine.map((cuisine) => {
                                        return <li key={cuisine.id}>{cuisine.type}</li>
                                    })}
                                </ul>
                                <Link
                                    to={"/restaurants/" + currentRestaurant.id}
                                    className="btn btn-outline-primary btn-sm">
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
            </div>
        );
    }
}