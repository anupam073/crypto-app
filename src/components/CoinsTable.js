import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from '../components/Coin';
import '../components/CoinsTable.scss';



function CoinsTable() {
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

  const handleChange = e => {
      setSearch(e.target.value)
  }
  
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  


    return (
      <div className="coins-table-container">
        <div className="search-bar">
            <h2>Skaner akcji</h2>
            <form>
            Znajdź kryptowalutę:
            <input
            className='coin-input'                        
            type='text'
            placeholder='wpisz nazwę...'
            onChange={handleChange}
            />
            </form>
        </div>

        <div className="coins-table">
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
      </div>  
    )
}

export default CoinsTable;