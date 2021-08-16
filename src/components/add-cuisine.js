import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";
import { Link } from "react-router-dom";

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
        this.setState({
            currentCuisine: cuisine,
            currentIndex: index
        })
        console.log("*** ", this.state.currentCuisine)
        // this.getCuisineRestaurants(this.state.currentIndex);
    }

    saveCuisine() {
        const data = {
            type: this.state.type
        };

        RestaurantDataService.createCuisine(data)
        // axiosInstance.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    type: response.data.type,

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

            submitted: false
        });
        console.log("new submitted ", this.state.submitted)
    }

    render() {
        const { cuisines, currentCuisine, currentIndex } = this.state;
        return (
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
                                to={"api/cuisine/" + currentCuisine.id}
                                className="btn btn-outline-primary btn-sm">
                                Edit
                            </Link>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Category...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

}