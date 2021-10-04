import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{ textAlign: "center", backgroundColor: "#00203FFF", padding: "20px" }}>
            <NavLink
                style={{ textDecoration: "none", padding: "5px", margin: "5px", color: "white" }}
                to="/home"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#ADEFD1FF"
                }}
            >
                Home
            </NavLink >
            <NavLink
                style={{ textDecoration: "none", padding: "5px", margin: "5px", color: "white" }}
                to="/services"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#ADEFD1FF"
                }}
            >
                Services
            </NavLink>
            <NavLink
                style={{ textDecoration: "none", padding: "5px", margin: "5px", color: "white" }}
                to="/free"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#ADEFD1FF"
                }}
            >
                Free Services
            </NavLink>
            <NavLink
                style={{ textDecoration: "none", padding: "5px", margin: "5px", color: "white" }}
                to="/about"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#ADEFD1FF"
                }}
            >
                About us
            </NavLink>

        </div>
    );
};

export default Header;