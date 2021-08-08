import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";
import { Link } from "react-router-dom";
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
        // debugger;
        RestaurantDataService.findByCity(this.state.selectedOption)
            .then(response => {
                this.setState({
                    restaurants: response.data,
                    currentRestaurant: null
                });
                console.log(response.data)
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

    // state = {
    //     selectedOption: null,
    // };

    handleChange = (event) => {
        // debugger;
        this.setState({ selectedOption: event.target.value }, () =>
            console.log('Option selected: ', event)
        )
    }

    // handleChange(event) {
    //     console.log(event)
    //     this.setState({
    //         value: event.target.value
    //     });

    // }

    // handleSubmit(event) {
    //     console.log("handleSubmit ", event);
    //     // debugger;
    //     event.preventDefault();
    // }



    render() {
        const { restaurants, currentRestaurant, currentIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    {/* <div className="input-group mb-3"> */}

                        {/* <div className="container"> */}
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
                                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                                        value={this.state.selectedOption}
                                        onChange={this.handleChange}>
                                        {/* {citiesList} */}
                                        {this.state.cities.map((city, index) => (
                                            <option key={index} value={city.city}>{city.city}</option>
                                        ))}
                                    </select>
                                    <input type="submit" value="Submit" />
                                </form>
                        {/* </div> */}
{/*                     <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                value={this.state.selectedOption}
                                onClick={this.searchCity}>
                                Search
                            </button>
                        </div> */}
                    {/* </div> */}
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
                                <a target='_blank' href={currentRestaurant.website}>{currentRestaurant.website}</a>
                                
                            </div>
                            <div>
                                <label>
                                    <strong>Address:</strong>
                                </label>{" "}
                                {currentRestaurant.address}
                            </div>
                            {/* <div>
                                <label>
                                    <strong>City:</strong>
                                </label>{" "}
                                {currentRestaurant.city}
                            </div> */}
                            <Link
                                to={"/restaurants/" + currentRestaurant.id}
                                className="badge badge-light">
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