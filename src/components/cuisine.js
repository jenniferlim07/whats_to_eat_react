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
        // this.handleChange = this.handleChange.bind(this);

        this.state = {
            currentCuisine: {
                id: null,
                type: "",                
            },
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
                console.log(this.state.restaurants)
            })
            .catch(e => {
                console.log(e);
            });
    }

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

    render() {
        const { currentCuisine } = this.state

        return (
            <div className="ad">
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
                            </form>

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