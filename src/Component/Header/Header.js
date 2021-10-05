import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ backgroundColor: "#00203FFF" }}>
            <div className="container-fluid">

                <img className="navbar-brand" style={{ float: "left", width: "100px", marginLeft: 20 }} src="https://cdn.steemitimages.com/DQmWspTV26MzQTBkR1FNr8j7HfUYcAaUBupLFGsYwG9VSHr/SMART-removebg-preview.png" alt="" />
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                    <div className="navbar-nav ">

                        <NavLink
                            className="nav-link "
                            style={{ textDecoration: "none", padding: "5px", margin: "5px", color: "white" }}
                            to="/home"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#ADEFD1FF"
                            }}
                        >
                            <i className="fas fa-home"></i> Home
                        </NavLink >


                        <NavLink
                            className="nav-link"
                            style={{ textDecoration: "none", padding: "5px", margin: "5px", color: "white" }}
                            to="/services"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#ADEFD1FF"
                            }}
                        >
                            <i className="fab fa-servicestack"></i>   Services
                        </NavLink>


                        <NavLink
                            className="nav-link"
                            style={{ textDecoration: "none", padding: "5px", margin: "5px", color: "white" }}
                            to="/free"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#ADEFD1FF"
                            }}
                        >
                            <i className="fab fa-free-code-camp"></i> Free Services
                        </NavLink>


                        <NavLink
                            className="nav-link "
                            style={{ textDecoration: "none", padding: "5px", margin: "5px", color: "white" }}
                            to="/about"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#ADEFD1FF"
                            }}
                        >
                            <i className="fas fa-address-card"></i>  About us
                        </NavLink>

                    </div>
                </div>
            </div>
        </nav>





    );
};

export default Header;