import React, { useState, useEffect } from 'react';
import Coin from '../Coin/Coin';
import '../CoinsTable/CoinsTable.scss';
import { Link } from 'react-router-dom';

function CoinsTable() {
    useEffect(() => {
      fetchItems();
    }, []);

    const [search, setSearch] = useState('');
    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false'
        );

        const items = await data.json();
        setItems(items);
    };

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = items.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div className="coins-table-container">
        <div className="search-bar">
            <h2>Find a cryptocurrency</h2>
            <form>
              <input
              className='coin-input'                        
              type='text'
              placeholder='type a name...'
              onChange={handleChange}
              />
            </form>
        </div>

        <div className="coins-table">
          {filteredCoins.map(item => (
            <div key={item.id} className="coins-list" >
              <Link to={`/${item.id}`} style={{ textDecoration: 'none' }}>
                <Coin
                  key={item.symbol}
                  name={item.name}
                  price={item.current_price}
                  symbol={item.symbol}
                  marketcap={item.total_volume}
                  volume={item.market_cap}
                  image={item.image}
                  priceChange={item.price_change_percentage_24h}
                />
              </Link>
            </div>   
          ))}               
        </div>
      </div>  
    )
}

export default CoinsTable;