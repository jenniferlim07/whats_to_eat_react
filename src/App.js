import './App.css';
import React, { Component, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import images from './images/indulge-restaurant.jpg';


import RestaurantList from "./components/restaurant-list.component";
import AddRestaurant from "./components/add-restaurant.component";
import Restaurant from "./components/restaurant.component";
import Maps from "./components/maps.component";
import MyGoogleMap from './components/MyGoogleMap';
import AddCuisine from "./components/add-cuisine";

import Header from "./components/header";
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import Logout from "./components/logout";
import Homepage from "./components/homepage"
import CuisineList from './components/cuisine-list';


class App extends Component {
  // const [state, setState] = useState();


  render() {
    return (
      <div>
        {/* <div className="landing-wrapper"
        style={{ backgroundImage: `url(${images})`}}> */}
        <Header />
        <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-between">
        <div className="navbar-collapse collapse dual-collapse2">
          <a href="/login" className="navbar-brand">
            WhatsToEat
          </a>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/restaurants"} className="nav-link">
                Restaurants
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Restaurant
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/cuisine"} className="nav-link">
                Cuisines
              </Link>
            </li>
          </ul>
              </div>
          <div className="navbar-collapse collapse dual-collapse2" >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Register
              </Link>
            </li>
            {/* {!localStorage.getItem('access_token') && ( */}

            {/* {{(localStorage.getItem('access_token') === 'true') ?  */}
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li> 
            {/* {localStorage.getItem('access_token') && ( */}
            <li className="nav-item">
              <Link to={"/logout"} className="nav-link">
                Logout
              </Link>
            </li> 



          </ul>
        </div>
        </nav>
        {/* <img src={images} alt="Logo" /> */}

        <div className="container mt-3">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login/" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route exact path="/" component={Homepage} />
            <Route exact path="/restaurants" component={RestaurantList} />

            {/* <Route exact path="/add" component={AddRestaurant} /> */}
            <Route path="/restaurants/:id" component={Restaurant} />
            <div className="main-wrapper">
            {/* <Route exact path="/" component={MyGoogleMap} /> */}
            <Route exact path="/add" component={MyGoogleMap} />
            <Route path="/cuisine" component={CuisineList} />
            </div>
          </Switch>
          {/* <Footer /> */}
        </div>
        {/* </div> */}
      </div>

    );
  }
}

export default App;
