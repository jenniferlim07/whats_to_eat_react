import './App.css';
import React, { Component, useState, useEffect } from "react";
import { Route, Switch, Link, NavLink, Nav } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import images from './images/my_logo.jpg';

import RestaurantList from "./components/restaurant-list.component";
// import AddRestaurant from "./components/add-restaurant.component";
import Restaurant from "./components/restaurant.component";
// import Maps from "./components/maps.component";
import MyGoogleMap from './components/MyGoogleMap';
// import AddCuisine from "./components/add-cuisine";

import Header from "./components/header";
// import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import Logout from "./components/logout";
import Homepage from "./components/homepage"
import CuisineList from './components/cuisine-list';
import Cuisine from './components/cuisine';
import Navigation from './components/navigation';

class App extends Component {

  render() {
    return (
      <div>
        <Header />

      {/* id="sidebar" className="col-sm-3 col-md-3 col-lg-2 d-md-block sidebar text-start" */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav flex-row">
            {/* <li className="nav-item">
                <NavLink  className="nav-link h5 link-secondary" to={"/home"}>
                  <img src={images} alt="Logo" />
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink  className="nav-link h5 link-secondary" to={"/restaurants"}>
                  <span className="ml-2">Restaurants</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link h5 link-secondary" to={"/add"}>
                  <span className="ml-2">Add Restaurant</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link h5 link-secondary" to={"/cuisine"}>
                  <span className="ml-auto">Cuisines</span>
                </NavLink>
              </li>
            </ul>

            <Navigation />
          </nav>

        {/* <img src={images} alt="Logo" /> */}
        {/* className="container mt-3" */}
        <div>

          <Switch>
            <Route path="/register" component={Register} />

            {/* <div
              onClick={this.changeState}
            >
              {login ? <Route path="/login/" component={Login} /> : <Route path="/logout" component={Logout} />}
            </div> */}
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
            <Route path="/cuisines/:id" component={Cuisine} />
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
