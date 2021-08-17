import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";
import '../index.css';

export default class Cuisine extends Component {
    constructor(props) {
        super(props);
        this.onChangeType = this.onChangeType.bind(this);
        this.getCuisine = this.getCuisine.bind(this);
        // this.updateCuisine = this.updateCuisine.bind(this);
        this.deleteCuisine = this.deleteCuisine.bind(this);
        this.retrieveCuisines = this.retrieveCuisines.bind(this);
        this.setCuisine = this.setCuisine.bind(this);
        // this.getCuisineRestaurants = this.getCuisineRestaurants.bind(this)
        // this.handleChange = this.handleChange.bind(this);

        this.state = {
            currentCuisine: {
                id: null,
                type: "",
                
            },
            // cuisines: [],
            restaurants: [],
            message: ""
        };
    }

    componentDidMount() {
        this.getCuisine(this.props.match.params.id);
        this.retrieveCuisines();
    }

    onChangeType(e) {
        const type = e.target.value;

        this.setState(prevState => ({
                currentCuisine: {
                    ...prevState.currentCuisine,
                    type: type
            }
        }));
    }

    getCuisine(id) {
        RestaurantDataService.getCuisine(id)
            .then(response => {
                this.setState({
                    currentCuisine: response.data,
                    
                });
                // console.log("get restaurant ", response.data)
                console.log(this.state.restaurants)
                // console.log(this.state.currentRestaurant.cuisine)
            })
            .catch(e => {
                console.log(e);
            });
        // this.getCuisineRestaurants(id);
    }

    // getCuisineRestaurants(id) {
    //     RestaurantDataService.getRestaurants(id)
    //         .then(response => {
    //             this.setState({
    //                 restaurants: response.data
    //             });
    //             console.log("get restaurant ", response.data)
    //             console.log(this.state.restaurants)
    //             // console.log(this.state.currentRestaurant.cuisine)
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

    // updateRestaurant() {

    //     RestaurantDataService.update(
    //         this.state.currentRestaurant.id, 
    //         this.state.currentRestaurant
    //     )
    //         .then(response => {
    //             console.log(response.data);
    //             this.setState({
    //                 message: "The restaurant was update successfully!"
    //             });
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

    deleteCuisine() {
        RestaurantDataService.deleteCuisine(this.state.currentCuisine.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push("/addcuisine")
            })
            .catch(e => {
                console.log(e);
            });
    }

    retrieveCuisines() {
        RestaurantDataService.getAllCuisines()

            .then(response => {
                this.setState({
                    cuisines: response.data
                });
                console.log("retrieve cuisines ", response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    setCuisine(cuisine, index) {
        console.log("set cuisine ", cuisine)
        this.setState({
            cuisine: cuisine,
            currentIndex: index
        })
    }

    // handleChange(event) {
    //     const data = {
    //         id: this.state.currentCuisine.id,
    //         type: this.state.currentRestaurant.type,
    //         restaurants: this.state.currentRestaurant.restaurants,

    //         cuisine: event.target.value
    //     };
    //     // console.log(event.target.getAttribute("data-id").value)
    //     console.log("event target ", event.target.value)

    //     this.setState({
    //         currentRestaurant: data
    //     })
    //     // console.log("category", category)

    //     event.preventDefault();
    // }

    render() {
        const { currentCuisine } = this.state

        return (
            <div className="app">
            <div className="card">
                {currentCuisine ? (
                    <div className="edit-form">
                        <h4>Cuisine</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Type</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={currentCuisine.type}
                                    onChange={this.onChangeType}
                                />
                            </div>


                            {/* <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    value={currentRestaurant.city}
                                    onChange={this.onChangeCity}
                                    name="city"
                                />
                            </div> */}
                        </form>
                        {/* <ul>
                            <label>
                                <strong>Cuisines:</strong>
                            </label>
                            {this.state.restaurants.map((restaurant) => {
                                return <li key={restaurant.id}>{restaurant.name}</li>
                            })}
                        </ul> */}


                        <button
                            type="submit"
                            className="btn btn-outline-primary btn-sm"
                            onClick={this.deleteCuisine}>
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
            </div>
        );
    }
}