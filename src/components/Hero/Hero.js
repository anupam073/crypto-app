import React from 'react';
import '../Hero/Hero.scss'
import imageBg from '../../assets/hero-image.png';


function Hero() {
    
    return (
        <div className="hero-container">
            <div className="hero-title">
                <h1>Explore top cryptocurrencies<br />with CoinViewer</h1>
                <span>View crypto prices and other stats, including Bitcoin, Ethereum, XRP, and more.</span>
            </div>
            <div className="hero-img">
                <img src={imageBg} alt='hero'/>
            </div>
        </div>
    )
}

export default Hero;