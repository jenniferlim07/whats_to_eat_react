import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";

export default class AddCuisine extends Component {
    constructor(props) {
        super(props);
        this.onChangeType = this.onChangeType.bind(this);
        this.saveCuisine = this.saveCuisine.bind(this);
        this.newCuisine = this.newCuisine.bind(this);

        this.state = {
            id: null,
            type: "",

            submitted: false
        };
    }

    onChangeType(e) {
        this.setState({
            type: e.target.value
        });
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
            </div>
        );
    }




}