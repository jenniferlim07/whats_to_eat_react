import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";

export default class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.getRestaurant = this.getRestaurant.bind(this);
        this.updateRestaurant = this.updateRestaurant.bind(this);
        this.deleteRestaurant = this.deleteRestaurant.bind(this);
        this.retrieveCuisines = this.retrieveCuisines.bind(this);
        this.setCuisine = this.setCuisine.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            currentRestaurant: {
                id: null,
                name: "",
                website: "",
                address: "",
                city: "",
                cuisine: '',
            },
            cuisines: [],

            message: ""
        };
    }

    componentDidMount() {
        this.getRestaurant(this.props.match.params.id);
        this.retrieveCuisines();
    }

    onChangeName(e) {
        const name = e.target.value;

        this.setState(prevState => ({
                currentRestaurant: {
                    ...prevState.currentRestaurant,
                    name: name
            }
        }));
    }

    onChangeWebsite(e) {
        const website = e.target.value

        this.setState(prevState => ({
            currentRestaurant: {
                ...prevState.currentRestaurant,
                website: website
            }
        }));
    }

    onChangeAddress(e) {
        const address = e.target.value
        
        this.setState(prevState => ({
            currentRestaurant: {
                ...prevState.currentRestaurant,
                address: address
            }
        }));
    }

    onChangeCity(e) {
        const city = e.target.value

        this.setState(prevState => ({
            currentRestaurant: {
                ...prevState.currentRestaurant,
                city: city
            }
        }));
    }

    getRestaurant(id) {
        RestaurantDataService.get(id)
            .then(response => {
                this.setState({
                    currentRestaurant: response.data
                });
                console.log("get restaurant ", response.data)
                console.log(this.state.currentRestaurant)
                console.log(this.state.currentRestaurant.cuisine)
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateRestaurant() {

        RestaurantDataService.update(
            this.state.currentRestaurant.id, 
            this.state.currentRestaurant
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The restaurant was update successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    deleteRestaurant() {
        RestaurantDataService.delete(this.state.currentRestaurant.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push("/restaurants")
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

    handleChange(event) {
        const data = {
            id: this.state.currentRestaurant.id,
            name: this.state.currentRestaurant.name,
            website: this.state.currentRestaurant.website,
            address: this.state.currentRestaurant.address,
            city: this.state.currentRestaurant.city,

            cuisine: event.target.value
        };
        // console.log(event.target.getAttribute("data-id").value)
        console.log("event target ", event.target.value)

        this.setState({
            currentRestaurant: data
        })
        // console.log("category", category)

        event.preventDefault();
    }

    render() {
        const { currentRestaurant } = this.state

        return (
            <div>
                {currentRestaurant ? (
                    <div className="edit-form">
                        <h4>Restaurant</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={currentRestaurant.name}
                                    onChange={this.onChangeName}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="website">Website</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="website"
                                    value={currentRestaurant.website}
                                    onChange={this.onChangeWebsite}
                                    name="website"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input 
                                    type="address"
                                    className="form-control"
                                    id="address"
                                    value={currentRestaurant.address}
                                    onChange={this.onChangeAddress}
                                    // name="address"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    value={currentRestaurant.city}
                                    onChange={this.onChangeCity}
                                    name="city"
                                />
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="city">Cuisine</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="cuisine"
                                    required value=
                                    {currentRestaurant.cuisine ? (<ul>
                                        <label>
                                            <strong>Cuisines</strong>
                                        </label>
        
                                        {currentRestaurant.cuisine.map((cuisine) => {
                                            return <li>{cuisine.type}</li>
                                        })}
                                    </ul>) : ('')}
                                    name="cuisine"
                                />
                            </div> */}

                            {/* {currentRestaurant.cuisine ? (<ul>
                                <label>
                                    <strong>Cuisines</strong>
                                </label>

                                {currentRestaurant.cuisine.map((cuisine) => {
                                    return <li >{cuisine.type}</li>
                                })}
                            </ul>) : ('')} */}
                            {/* <ul>
                                <label>
                                    <strong>Cuisines:</strong>
                                </label>

                                {currentRestaurant.cuisine.map((cuisine) => {
                                    return <li >{cuisine.type}</li>
                                })}
                            </ul> */}

                            {/* <div >
                                <h4>Cuisine List</h4>
                                <ul className="list-group">
                                    {currentRestaurant && 
                                        this.state.currentRestaurant.cuisine.map((cuisine) => (
                                            <li
                                                // className={
                                                //     "list-group-item " +
                                                //     (index === currentIndex ? "active" : "")
                                                // }
                                                // onClick={() => this.setActiveRestaurant(restaurant, index)}
                                                // key={index}
                                                >
                                                {cuisine.type}
                                            </li>
                                        ))}
                                </ul>
                            </div> */}



                        </form>


                        <div className="container">
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
                                </form>
                        </div>

                        <button
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
        );
    }
}