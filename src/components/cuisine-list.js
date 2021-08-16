import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";
import { Link } from "react-router-dom";
import AddCuisine from "./add-cuisine";
import '../index.css';


export default class CuisineList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchCuisine = this.onChangeSearchCuisine.bind(this);
        this.retrieveCuisines = this.retrieveCuisines.bind(this);
        this.searchCuisine = this.searchCuisine.bind(this);
        // this.refreshList = this.refreshList.bind(this);
        // this.setActiveCuisine = this.setActiveCuisine.bind(this);
        this.setActiveRestaurant = this.setActiveRestaurant.bind(this);
        // this.removeAllTutorials = this.removeAllTutorials.bind(this);
        // this.getCuisineRestaurants = this.getCuisineRestaurants.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            cuisines: [],
            // currentCuisine: null,
            // currentIndex: -1,
            currentRestaurant: null,
            currentResIndex: -1,
            // currentCuisine: null,
            // currentIndex: -1,
            searchCuisine: "",
            restaurants: [],
            selectedOption: '',
        };
    }

    componentDidMount() {
        this.retrieveCuisines();
        // this.refreshList();
    }

    onChangeSearchCuisine(e) {
        const searchCuisine = e.target.value;

        this.setState({
            searchCuisine: searchCuisine
        });
    }


    retrieveCuisines() {
        RestaurantDataService.getAllCuisines()
            .then(response => {
                this.setState({
                    cuisines: response.data
                });
                console.log("retrieveCuisines ", response.data);
                console.log(this.state.cuisines)
            })
            .catch(e => {
                console.log(e);
            });
    }

    // refreshList() {
    //     this.retrieveCuisines();
    //     this.setState({
    //         currentCuisine: null,
    //         currentIndex: -1
    //     })
    //     // console.log("*** ", this.state.currentIndex)
    // }

    // setActiveCuisine(cuisine, index) {
    //     this.setState({
    //         currentCuisine: cuisine,
    //         currentIndex: index
    //     })
    //     // console.log("*** ", this.state.currentIndex)
    //     this.getCuisineRestaurants(this.state.currentIndex);
    // }
    setActiveRestaurant(restaurant, index) {
        this.setState({
            currentRestaurant: restaurant,
            currentResIndex: index
        })
        // console.log("*** ", this.state.currentIndex)
        // this.getCuisineRestaurants(this.state.currentIndex);
    }

    searchCuisine(event) {

        console.log("***** ", this.state.selectedOption)
        this.state.selectedOption = parseInt(this.state.selectedOption) + 1
        RestaurantDataService.getRestaurants(this.state.selectedOption)
            .then(response => {
                this.setState({
                    restaurants: response.data
                });
                console.log("cuisine restaurant data ", response.data)
            })
            .catch(e => {
                console.log(e);
            })
        event.preventDefault();
    }

    handleChange = (event) => {
        // debugger;
        this.setState({ selectedOption: event.target.value}, () =>
            console.log('Option selected: ', event.target.value)
        )
    }

    getCuisineRestaurants(id) {
        RestaurantDataService.getRestaurants(id)
            .then(response => {
                this.setState({
                    restaurants: response.data
                });
                console.log("cuisine restaurant data ", response.data)
            })
            .catch(e => {
                console.log(e);
            })
    }
    render() {
        const { cuisines, restaurants, currentRestaurant, currentResIndex} = this.state;

        return (
            <div className="bg">
            <div className="card">
            {/* <div className='rowC'>
            <div className="list row"> */}
                <div className="col-md-8">
                    {/* <div className="input-group mb-3"> */}
                        <h5>Restaurants by Cuisine</h5>
                        <div className="container">

                                <form onSubmit={this.searchCuisine}>
                                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                                    // <select className="mdb-select md-form colorful-select dropdown-primary"
                                        value={this.state.selectedOption}
                                        onChange={this.handleChange}>
                                        {/* {citiesList} */}
                                        {/* <option selected value="" disable selected>Choose a city</option> */}
                                        {cuisines.map((cuisine, index) => (
                                            
                                            <option key={index} value={index}>{cuisine.type}</option>
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
                        {this.state.restaurants &&
                            restaurants.map((restaurant, index) => (
                                <li
                                    className={
                                        "list-group-item " +
                                        (index === currentResIndex ? "active" : "")
                                    }
                                    onClick={() => this.setActiveRestaurant(restaurant, index)}
                                    key={index}>
                                    {restaurant.name}
                                </li>
                            ))}
                    </ul>

                </div>

                {/* <div className="col-md-8">
                    <h4>Cuisine List</h4>

                    <ul className="list-group">
                        {this.state.cuisines &&
                            cuisines.map((cuisine, index) => (
                                <li
                                    className={
                                        "list-group-item " +
                                        (index === currentIndex ? "active" : "")
                                    }
                                    onClick={() => this.setActiveCuisine(cuisine, index)}
                                    key={index}>
                                    {cuisine.type}
                                </li>
                            ))}
                    </ul>

                </div> */}

                <div className="col-md-6">
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

                            {/* <Link
                                to={"api/cuisine/" + currentCuisine.id}
                                className="btn btn-outline-primary btn-sm">
                                Edit
                            </Link> */}
                            {/* <Link
                                to={"/cuisines/" + currentRestaurant.id}
                                className="btn btn-outline-primary btn-sm">
                                Edit
                            </Link> */}
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Category...</p>
                        </div>
                    )}
                {/* </div>
                
            </div> */}
            {/* <AddCuisine /> */}
            </div>
            </div>
            </div>
        );
    }

}