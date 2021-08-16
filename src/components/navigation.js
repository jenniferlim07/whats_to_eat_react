import React, { Component } from "react";
import { Switch, Route, NavLink, useLocation } from "react-router-dom";
import images from '../images/my-logo.jpg';
import Login from './login';
import Logout from './logout';

// const Navigation = () => {
//     const { isAuth } = localStorage.getItem("access_token");

//     return isAuth ? <Login /> : <Logout />
// }



function Navigation(props) {
    const location = useLocation();
    // console.log("path 1", window.location)
    // console.log("path 2" , window.location.pathname)

    // console.log("nav rerender ", localStorage.getItem('access_token'))
    if (!localStorage.getItem('access_token')) {
        return (
            <div className="navigation">
                <nav id="topnav" className="navbar navbar-expand navbar-light">
                    <div className="container">
                        {/* <NavLink  className="navbar-brand" to="/login">
                            <span className="ml-auto">Login</span>
                        </NavLink> */}

                        <div>
                            <ul className="navbar-nav mr-auto">
                                <li className={`nav-item ${
                                    window.location.pathname === "/login" ? "active" : ""
                                }`}
                                >
                                <NavLink  className="nav-link h5 link-secondary" to={"/login"}>
                                    Login
                                </NavLink>
                                
                                </li>
                                <li class={`nav-item ${
                                    window.location.pathname === "/register" ? "active" : ""
                                }`}
                                >
                                    <NavLink  className="nav-link h5 link-secondary" to="/register">
                                        Register
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> 
            </div>
        );
    }
    else {
        return (
            <div className="navigation">
                <nav id="topnav" className="navbar navbar-expand navbar-light">
                    <div className="container">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className={`nav-item ${
                                window.location.pathname === "/restaurants" ? "active" : ""
                            }`}
                            >
                            <NavLink  className="navlink link-daark" to="/restaurants">
                                    Restaurants
                            </NavLink>
                            </li> */}
                            <li class={`nav-item ${
                                window.location.pathname === "/login" ? "active" : ""
                            }`}
                            >
                                <NavLink className="nav-link h5 link-secondary" to={"/logout"}>
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        )
    }

}

export default Navigation;
