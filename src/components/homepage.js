import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../index.css';


const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchCity = this.onChangeSearchCity.bind(this);
        this.retrieveRestaurants = this.retrieveRestaurants.bind(this);
        this.searchCity = this.searchCity.bind(this);
        this.retrieveCities = this.retrieveCities.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            user: localStorage.getItem('id'),
            restaurants: [],
            currentRestaurant: null,
            currentIndex: -1,
            searchCity: "",
            cities: [],
            random_restaurant: '',
        };
    }

    componentDidMount() {
        // this.retrieveRestaurants();
        this.retrieveCities();
    }
    

    onChangeSearchCity(e) {
        const searchCity = e.target.value;

        this.setState({
            searchCity: searchCity
        });
    }

    retrieveRestaurants() {
        console.log("*&*&*&*&* ", this.state.user)
        // const random_num = Math.floor(Math.floor()* response.data.lenth)
        RestaurantDataService.getAll()
            .then(response => {
                this.setState({
                    restaurants: response.data,
                    random_restaurant: response.data[Math.floor(Math.random() * response.data.length)]
                });
                console.log(response.data)
                console.log("random restaurant ", response.data[Math.floor(Math.random() * response.data.length)])
            })
            .catch(e => {
                console.log(e);
            });
    }

    searchCity(event) {
        // debugger;
        RestaurantDataService.findByCity(this.state.selectedOption)
            .then(response => {
                this.setState({
                    restaurants: response.data,
                    currentRestaurant: null,
                    random_restaurant: response.data[Math.floor(Math.random() * response.data.length)]
                });
                console.log("search city", response.data)
            })
            .catch(e => {
                console.log(e);
            });
        event.preventDefault();
    }

    retrieveCities() {
        RestaurantDataService.getAllCities()
        .then(response => {
            this.setState({
                cities: response.data,
                selectedOption: response.data[0].city,
            });
        })
        .catch(e => {
            console.log(e)
        });
    }

    handleChange = (event) => {
        // debugger;
        this.setState({ selectedOption: event.target.value }, () =>
            console.log('Option selected: ', event)
        )
    }

    // const classes = useStyles();


    render() {
        return (
            <div className="app">
            <div className="card">

                <h1 className="heading">{this.state.random_restaurant.name}</h1>
                
                <div className="col-md-8">
                <Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={useStyles.submit}
						onClick={this.retrieveRestaurants}
					>
						Surprise Me
                </Button>
                {/* <Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={useStyles.submit}
						onClick={this.retrieveCities}
					>
						Pick by Location
                </Button> */}
                <br />
                <h5>Surprise by Location</h5>
                <div className="container">
                    <form onSubmit={this.searchCity}>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                            value={this.state.selectedOption}
                            onChange={this.handleChange}>
                            {/* {citiesList} */}
                            {this.state.cities.map((city, index) => (
                                <option key={index} value={city.city}>{city.city}</option>
                            ))}
                        </select>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                </div>
                {/* <Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={useStyles.submit}
						onClick={this.retrieveCuisines}
					>
						Pick by Cuisine
                </Button> */}
                {/* <button>Surprise Me</button>
                <button>
                    <span>Pick by Location</span>
                </button>
                <button>
                    <span>Pick by Cuisine</span>
                </button> */}

            </div>
            {/* </div> */}
            </div>
        )
    }
}