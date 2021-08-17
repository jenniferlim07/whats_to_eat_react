import React from "react";
import {NavLink, useLocation } from "react-router-dom";
// import Login from './login';
// import Logout from './logout';

function Navigation(props) {
    const location = useLocation();

    if (!localStorage.getItem('access_token')) {
        return (
            <div className="navigation">
                <nav id="topnav" className="navbar navbar-expand navbar-light">
                    <div className="container">
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
