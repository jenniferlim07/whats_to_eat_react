import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import '../index.css';


export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchCity = this.onChangeSearchCity.bind(this);
        this.retrieveRestaurants = this.retrieveRestaurants.bind(this);
        this.searchCity = this.searchCity.bind(this);
        this.retrieveCities = this.retrieveCities.bind(this);
        this.retrieveCuisines = this.retrieveCuisines.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeCuisine = this.handleChangeCuisine.bind(this);
        this.onChangeSearchCuisine = this.onChangeSearchCuisine.bind(this);
        this.retrieveCuisines = this.retrieveCuisines.bind(this);
        this.searchCuisine = this.searchCuisine.bind(this);

        this.state = {
            user: localStorage.getItem('id'),
            restaurants: [],
            currentRestaurant: null,
            currentIndex: -1,
            searchCity: "",
            cities: [],
            random_restaurant: '',
            cuisines: [],
            searchCuisine: "",
        };
    }

    componentDidMount() {
        this.retrieveCities();
        this.retrieveCuisines();
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
                    restaurants: response.data,
                    random_restaurant: response.data[Math.floor(Math.random() * response.data.length)]
                });
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            });
    }

    searchCity(event) {
        RestaurantDataService.findByCity(this.state.selectedOptionCity)
            .then(response => {
                this.setState({
                    restaurants: response.data,
                    random_restaurant: response.data[Math.floor(Math.random() * response.data.length)]
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
                selectedOptionCity: response.data[0].city,
            });
        })
        .catch(e => {
            console.log(e)
        });
    }

    handleChangeCity = (event) => {
        this.setState({ selectedOptionCity: event.target.value }, () =>
            console.log('Option selected City: ', event)
        )
    }

    handleChangeCuisine = (event) => {
        this.setState({ selectedOptionCuisine: event.target.value }, () =>
            console.log('Option selected Cuisine: ', event)
        )
    }

    retrieveCuisines() {
        RestaurantDataService.getAllCuisines()

            .then(response => {
                this.setState({
                    cuisines: response.data,
                    selectedOptionCuisine: response.data[0].id,
                });
                console.log("cuisines ", response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    onChangeSearchCuisine(e) {
        const searchCuisine = e.target.value;

        this.setState({
            searchCuisine: searchCuisine
        });
    }
    searchCuisine(event) {
        const index = parseInt(this.state.selectedOptionCuisine) + 1
        RestaurantDataService.getRestaurants(index)
            .then(response => {
                this.setState({
                    restaurants: response.data,
                    random_restaurant: response.data[Math.floor(Math.random() * response.data.length)]
                });
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            })
        event.preventDefault();
    }

    render() {
        return (
            <div className="app">
                <div className="hm-card">        
                    <h1 className="heading">
                        <a target='_blank' href={this.state.random_restaurant.website}>
                            {this.state.random_restaurant.name}
                        </a>   
                    </h1>
                
                    <div className="col-md-8">
                        <Button
                                // className="submitBtn"
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                // className={useStyles.submit}
                                onClick={this.retrieveRestaurants}
                            >
                                Surprise Me
                        </Button>
                        <br />
                        <br />

                        <h5>Surprise by Location</h5>
                        <div className="container">
                            <form onSubmit={this.searchCity}>
                                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                                    value={this.state.selectedOptionCity}
                                    onChange={this.handleChangeCity}>
                                    {this.state.cities.map((city, index) => (
                                        <option key={index} value={city.city}>{city.city}</option>
                                    ))}
                                </select>
                                <button className="submitBtn" type="submit" value="Submit">
                                    Submit
                                </button>
                            </form>
                        </div>

                        <h5>Surprise by Cuisine</h5>
                        <div className="container">
                            <form onSubmit={this.searchCuisine}>
                                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                                    value={this.state.selectedOptionCuisine}
                                    onChange={this.handleChangeCuisine}>
                                    {this.state.cuisines.map((cuisine, index) => (
                                        <option key={index} value={index}>{cuisine.type}</option>
                                    ))}
                                </select>
                                <button className="submitBtn" type="submit" value="Submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>                         
                </div>
            </div>
        )
    }
}