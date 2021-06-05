import React from 'react';
import '../components/Navbar.scss';
import logo from'../img/logox.png';

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="logo">
                <img src={logo} alt='' />
                <h2>COINTRACKER</h2>
            </div>
            <div className="menu">
                <a href="/start">Home</a>
                <a href="/start">Wallet</a>
                <a href="/start">Help Desk</a>
                <a href="/start">|</a>
                <button className="navbar-btn">Contact with us!</button>
            </div>
        </div>
    )
}

export default Navbar;