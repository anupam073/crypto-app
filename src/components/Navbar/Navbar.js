import React from 'react';
import '../Navbar/Navbar.scss';
import logo from '../../assets/logo.png';

import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="logo">
                <img src={logo} alt='' />
                <h2>CoinViewer</h2>
            </div>
            <nav className="menu">
                <ul>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>Home</li>
                    </Link>
                        <li>|</li> 
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <li>Contact with us!</li>            
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;