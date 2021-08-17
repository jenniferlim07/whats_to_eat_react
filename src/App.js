import './App.css';
import React, { Component } from "react";
import { Route, Switch, NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import RestaurantList from "./components/restaurant-list.component";
import Restaurant from "./components/restaurant.component";
import MyGoogleMap from './components/MyGoogleMap';

import Header from "./components/header";
// import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import Logout from "./components/logout";
import Homepage from "./components/homepage"
import CuisineList from './components/cuisine-list';
import Cuisine from './components/cuisine';
import AddCuisine from './components/add-cuisine';
// import Navigation from './components/navigation';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav justify-content-center" id="navigation">
              <li className="nav-item">
                <NavLink  className="nav-link h5 link-secondary" to={"api/restaurants/"}>
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
              <li className="nav-item">
                <NavLink  className="nav-link h5 link-secondary" to={"/addcuisine"}>
                  <span className="ml-auto">Add Cuisines</span>
                </NavLink>
              </li>
            </ul>
            {/* <Navigation /> */}
          </nav>

        <div>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login/" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/whats_to_eat_react" component={Homepage} />
            <Route path="/api/restaurants/" component={RestaurantList} />
            <Route path="/restaurants/:id" component={Restaurant} />
            <Route path="/cuisine" component={CuisineList} />
            <Route path="/cuisines/:id" component={Cuisine} />
            <Route path="/addcuisine" component={AddCuisine} />

            <div className="main-wrapper">
              <Route exact path="/add" component={MyGoogleMap} />
            </div>
          </Switch>
        </div>
      </div>

    );
  }
}

export default App;
