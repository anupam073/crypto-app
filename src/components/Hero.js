import React, { useState, useEffect } from 'react';
import '../components/Hero.scss'
import imageBg from'../img/hero-image.png'

function Hero() {
    
    return (
        <div className="hero-container">
            <div className="hero-title">
                <h1>Blockchain-powered<br />products for HR</h1>
                <p>Using blockchain to streamline global access to work and payments</p>
            </div>
            <div className="hero-img">
                <img src={imageBg} alt='hero'/>
            </div>
        </div>
    )
}

export default Hero;