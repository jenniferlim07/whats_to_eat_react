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

        this.state = {
            cuisines: [],
            currentCuisine: null,
            currentIndex: -1,
        };
    }

    componentDidMount() {
        this.retrieveCuisines();
    }


    retrieveCuisines() {
        // axiosInstance.get()

        RestaurantDataService.getAllCuisines()

            .then(response => {

                this.setState({
                    cuisines: response.data
                });
                console.log(response.data);
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
    }

    setActiveCuisine(cuisine, index) {
        this.setState({
            currentCuisine: cuisine,
            currentIndex: index
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

                            <Link
                                to={"api/cuisine/" + currentCuisine.id}
                                className="badge badge-warning">
                                Edit
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
            <AddCuisine />
            </div>
            </div>
            </div>
        );
    }

}