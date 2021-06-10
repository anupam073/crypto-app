import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from '../components/Coin';
import '../components/Hero.scss'
import SingleView from '../components/SingleView';
import imageBg from'../img/hero-image.png'

function Hero() {
    const [search, setSearch] = useState('');
    const [coins, setCoins] = useState([]);
  
    useEffect(() => {
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false'
        )
        .then(res => {
          setCoins(res.data);
          console.log(res.data);
        })
        .catch(error => console.log(error));
    }, []);
  
    const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
  
    const handleChange = e => {
        setSearch(e.target.value)
    }

    return (
        <>
            <div className="hero-container">
                <div className="hero-title">
                    <h1>Blockchain-powered<br />products for HR</h1>
                    <p>Using blockchain to streamline global access to work and payments</p>
                    <form>
                            Znajdź kryptowalutę:
                            <input
                            className='coin-input'                        
                            type='text'
                            placeholder='wpisz nazwę...'
                            onChange={handleChange}
                            />
                    </form>
                    <SingleView />
                </div>
                <div className="hero-img">
                    <img src={imageBg} alt='hero' />
                </div>
            </div>
            <div className="coins-table">
                <div className="coins-table-title">
                    <h1>Skaner akcji</h1>
                </div>
                <div className="coins-list">
                    {filteredCoins.map(coin => {
                        return (
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            price={coin.current_price}
                            symbol={coin.symbol}
                            marketcap={coin.total_volume}
                            volume={coin.market_cap}
                            image={coin.image}
                            priceChange={coin.price_change_percentage_24h}
                        />
                        );
                    })}
                </div>                
            </div>
        </>
    )
}

export default Hero;