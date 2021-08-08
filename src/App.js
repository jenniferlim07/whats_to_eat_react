import './App.css';
import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import RestaurantList from "./components/restaurant-list.component";
import AddRestaurant from "./components/add-restaurant.component";
import Restaurant from "./components/restaurant.component";
import Maps from "./components/maps.component";
import MyGoogleMap from './components/MyGoogleMap';

import Header from "./components/header";
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import Logout from "./components/logout";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            WhatsToEat
          </a>
          <div className="navbar-nav mr-auto">
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
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login/" component={Login} />
            <Route path="/logout" component={Logout} />

            <Route exact path="/restaurants" component={RestaurantList} />
            {/* <Route exact path="/add" component={AddRestaurant} /> */}
            <Route path="/restaurants/:id" component={Restaurant} />
            {/* <Route exact path="/" component={Maps} /> */}
            <div className="main-wrapper">
            {/* <Route exact path="/" component={MyGoogleMap} /> */}
              <Route exact path="/add" component={MyGoogleMap} />
            </div>
          </Switch>
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;
