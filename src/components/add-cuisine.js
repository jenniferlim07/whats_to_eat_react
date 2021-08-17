import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";
import { Link } from "react-router-dom";
import '../index.css';

export default class AddCuisine extends Component {
    constructor(props) {
        super(props);
        this.onChangeType = this.onChangeType.bind(this);
        this.saveCuisine = this.saveCuisine.bind(this);
        this.newCuisine = this.newCuisine.bind(this);
        this.retrieveCuisines = this.retrieveCuisines.bind(this);
        this.setActiveCuisine = this.setActiveCuisine.bind(this);

        this.state = {
            cuisines: [],
            id: null,
            type: "",
            currentCuisine: null,
            currentIndex: -1,
            user: localStorage.getItem('id'),

            submitted: false
        };
    }

    componentDidMount() {
        this.retrieveCuisines();
        // this.refreshList();
    }

    onChangeType(e) {
        this.setState({
            type: e.target.value
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

    setActiveCuisine(cuisine, index) {
        // console.log("*** ", cuisine)
        // console.log("*** ", index)
        this.setState({
            currentCuisine: cuisine,
            currentIndex: index
        })
        // console.log("*** ", this.state.currentCuisine)
        // console.log("*** ", this.state.currentIndex)
        // this.getCuisineRestaurants(this.state.currentIndex);
    }

    saveCuisine() {
        const data = {
            user: this.state.user,
            type: this.state.type
        };

        RestaurantDataService.createCuisine(data)
        // axiosInstance.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    type: response.data.type,
                    user: this.state.user,

                    submitted: true
                });
                console.log(response.data)
                // console.log("save submitted", this.state.submitted)
            })
            .catch(e => {
                console.log(e);
            });
    }

    newCuisine() {
        this.setState({
            id: null,
            type: "",
            user: this.state.user,

            submitted: false
        });
        console.log("new submitted ", this.state.submitted)
    }
    
    deleteCuisine() {
        // console.log("delete index, ", this.state.currentIndex)
        // console.log("delete index, ", this.state.currentCuisine.id)
        const index = parseInt(this.state.currentCuisine.id) + 1
        console.log("index ", index)
        RestaurantDataService.delete(index)
            .then(response => {
                console.log(response.data);
                this.props.history.push("/addcuisine")
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { cuisines, currentCuisine, currentIndex } = this.state;
        return (
            <div className="bg">
            <div className="card">
            <div className="submit-form">
                <h5>Add Cuisine Type</h5>
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newCuisine}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            {/* <label htmlFor="title">Type</label> */}
                            <input
                                type="text"
                                className="form-control"
                                id="type"
                                required
                                value={this.state.type}
                                onChange={this.onChangeType}
                                name="type"
                            />
                        </div>

                        <button onClick={this.saveCuisine} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
                    <div className="col-md-8">
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
                            <Link
                                to={"/cuisines/" + currentCuisine.id}
                                className="btn btn-outline-primary btn-sm">
                                Edit
                            </Link>
                            </div>
                            {/* <button value={currentCuisine.id} onClick={this.deleteCuisine} className="btn btn-success">
                            Delete
                        </button> */}
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Category...</p>
                        </div>
                    )}
                </div>
            </div>
            </div>
            </div>
        );
    }

}