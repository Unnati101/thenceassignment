import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src={Logo} className='navbar-logo' />


                <div className="get-projects-button">
                    <Link to="/get-projects" className="button1">Get Projects</Link>
                </div>
                <div className="Onboard-Talent-button">
                    <Link to="#" className="button2">Onboard Talent</Link>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
