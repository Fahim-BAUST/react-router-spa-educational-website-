import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{ backgroundColor: "#00203FFF" }}>

            <img style={{ float: "left", width: "160px", bottom: 5 }} src="https://cdn.steemitimages.com/DQmWspTV26MzQTBkR1FNr8j7HfUYcAaUBupLFGsYwG9VSHr/SMART-removebg-preview.png" alt="" />

            <div style={{ textAlign: "right", backgroundColor: "#00203FFF", padding: "20px" }}>
                <NavLink
                    style={{ textDecoration: "none", padding: "5px", margin: "5px", color: "white" }}
                    to="/home"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#ADEFD1FF"
                    }}
                >
                    <i class="fas fa-home"></i> Home
                </NavLink >
                <NavLink
                    style={{ textDecoration: "none", padding: "5px", margin: "5px", color: "white" }}
                    to="/services"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#ADEFD1FF"
                    }}
                >
                    <i class="fab fa-servicestack"></i>   Services
                </NavLink>
                <NavLink
                    style={{ textDecoration: "none", padding: "5px", margin: "5px", color: "white" }}
                    to="/free"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#ADEFD1FF"
                    }}
                >
                    <i class="fab fa-free-code-camp"></i> Free Services
                </NavLink>
                <NavLink
                    style={{ textDecoration: "none", padding: "5px", margin: "5px", color: "white" }}
                    to="/about"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#ADEFD1FF"
                    }}
                >
                    <i class="fas fa-address-card"></i>  About us
                </NavLink>

            </div>


        </div>
    );
};

export default Header;