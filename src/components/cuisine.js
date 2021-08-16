import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";

export default class Cuisine extends Component {
    constructor(props) {
        super(props);
        this.onChangeType = this.onChangeType.bind(this);
        this.getCuisine = this.getCuisine.bind(this);
        // this.updateCuisine = this.updateCuisine.bind(this);
        // this.deleteCuisine = this.deleteCuisine.bind(this);
        this.retrieveCuisines = this.retrieveCuisines.bind(this);
        this.setCuisine = this.setCuisine.bind(this);
        this.getCuisineRestaurants = this.getCuisineRestaurants.bind(this)
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
        this.getCuisineRestaurants(id);
    }

    getCuisineRestaurants(id) {
        RestaurantDataService.getRestaurants(id)
            .then(response => {
                this.setState({
                    restaurants: response.data
                });
                console.log("get restaurant ", response.data)
                console.log(this.state.restaurants)
                // console.log(this.state.currentRestaurant.cuisine)
            })
            .catch(e => {
                console.log(e);
            });
    }

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

    // deleteRestaurant() {
    //     RestaurantDataService.delete(this.state.currentRestaurant.id)
    //         .then(response => {
    //             console.log(response.data);
    //             this.props.history.push("/restaurants")
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

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
            <div>
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
                        <ul>
                            <label>
                                <strong>Cuisines:</strong>
                            </label>
                            {this.state.restaurants.map((restaurant) => {
                                return <li key={restaurant.id}>{restaurant.name}</li>
                            })}
                        </ul>


                        {/* <div className="container">
                            <label htmlFor="city">Add Cuisine</label>
                                <form >
                                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                                        value={this.state.cuisine}
                                        onChange={this.handleChange}>
                                        {this.state.cuisines.map((cuisine) => (
                                            <option key={cuisine.id} value={cuisine.id}>{cuisine.type}</option>
                                        ))}
                                    </select>
                                    {/* <input type="submit" value="Submit" /> */}
                                {/*</form>
                        </div> */}

                        {/* <button
                            type="submit"
                            className="btn btn-outline-dark btn-sm"
                            onClick={this.updateRestaurant}>
                            Update
                        </button>

                        <button
                            type="submit"
                            className="btn btn-outline-dark btn-sm"
                            onClick={this.deleteRestaurant}>
                            Delete
                        </button> */}
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