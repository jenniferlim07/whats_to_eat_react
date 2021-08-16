import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";
import { Link } from "react-router-dom";
import AddCuisine from "./add-cuisine";
import '../index.css';


export default class CuisineList extends Component {
    constructor(props) {
        super(props);
        this.retrieveCuisines = this.retrieveCuisines.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveCuisine = this.setActiveCuisine.bind(this);
        // this.removeAllTutorials = this.removeAllTutorials.bind(this);
        this.getCuisineRestaurants = this.getCuisineRestaurants.bind(this);

        this.state = {
            cuisines: [],
            currentCuisine: null,
            currentIndex: -1,
            restaurants: [],
        };
    }

    componentDidMount() {
        this.retrieveCuisines();
        // this.refreshList();
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

    refreshList() {
        this.retrieveCuisines();
        this.setState({
            currentCuisine: null,
            currentIndex: -1
        })
        // console.log("*** ", this.state.currentIndex)
    }

    setActiveCuisine(cuisine, index) {
        this.setState({
            currentCuisine: cuisine,
            currentIndex: index
        })
        // console.log("*** ", this.state.currentIndex)
        this.getCuisineRestaurants(this.state.currentIndex);
    }

    // getRestaurant(id) {
    //     RestaurantDataService.get(id)
    //         .then(response => {
    //             this.setState({
    //                 currentRestaurant: response.data
    //             });
    //             console.log("get restaurant ", response.data)
    //             console.log(this.state.currentRestaurant)
    //             console.log(this.state.currentRestaurant.cuisine)
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

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
        const { cuisines, currentCuisine, currentIndex } = this.state;

        return (
            <div className="bg">
            <div className="card">
            <div className='rowC'>
            <div className="list row">
                <div className="col-md-8">
                    <h4>Cuisine List</h4>

                    <ul className="list-group">
                        {cuisines &&
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

                </div>
                <div className="col-md-6">
                    {currentCuisine ? (
                        <div>
                            <h4>Cuisine</h4>
                            <div>
                                <label>
                                    <strong>Type:</strong>
                                </label>{" "}
                                {currentCuisine.type}
                            </div>
                            <ul>
                                <label>
                                    <strong>Restaurants:</strong>
                                </label>
                                {currentCuisine.restaurants.map((restaurant) => {
                                    return <li key={restaurant}>{restaurant}</li>
                                })}
                            </ul>

                            <Link
                                to={"api/cuisine/" + currentCuisine.id}
                                className="btn btn-outline-primary btn-sm">
                                Edit
                            </Link>
                            <Link
                                to={"/cuisines/" + currentCuisine.id}
                                className="btn btn-outline-primary btn-sm">
                                Try This
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Category...</p>
                        </div>
                    )}
                </div>
                
            </div>
            {/* <AddCuisine /> */}
            </div>
            </div>
            </div>
        );
    }

}