import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../components/CoinDetails.scss';

function CoinDetails({ match }) {

    useEffect(() => {
        fetchItem();
    }, []);
    
    const [item, setItem] = useState({
        image: {},
        links: {},
        description: {},
        market_data: {
            current_price: {},
            market_cap: {},
            price_change_percentage_24h: {},
        },
        market_cap: {},
    });
    
    let fetchItem = async() => {
        const fetchItem = await fetch(`https://api.coingecko.com/api/v3/coins/${match.params.id.toLowerCase()}`);
        const item = await fetchItem.json();
        setItem(item);        
    };

    // useEffect(() => {
    //     axios
    //       .get(
    //         'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false'
    //       )
    //       .then(res => {
    //         setCoins(res.data);
    //         console.log(res.data);
    //       })
    //       .catch(error => console.log(error));
    //   }, []);


    return (
        <div className="details-container">
            <div className="details-title">
                <div className="details-name">
                    <div className="information">
                        <img src={item.image.large} alt="currency logo" />
                        <h1>{item.name}</h1>
                        <div className="symbol-box">{item.symbol}</div>
                    </div>
                    <div className="boxes">
                        <div className="rank-box">Rank: #{item.market_cap_rank}</div>
                        <div className="market-cap-box">Market Cap: {item.market_data.market_cap.usd}</div>
                    </div>
                </div>
                <div className="details-statistics">
                    <div className="right-title">{item.name} price ({item.symbol})</div>
                    <div className="price">
                        <div className="current-price">${item.market_data.current_price.usd}</div>
                        <div className="change">{item.market_data.price_change_percentage_24h < 0 ? (<p className='coin-percent red'>{Number(item.market_data.price_change_percentage_24h).toFixed(2)}%</p>) : (<p className='coin-percent green'>{Number(item.market_data.price_change_percentage_24h).toFixed(2)}%</p>)}</div>
                    </div>
                </div>
            </div>  

            <div className="description">
                <h2 className="title-description">What is {item.name}?</h2>
                <div className="text-description" dangerouslySetInnerHTML={{__html: item.description.en}}></div>
                <a href={item.links.homepage} className="btn-buy">Buy {item.name}</a>
            </div>

            <div className="changes-information">
                <h2 className="changes-title">Price Change</h2>
                <div className="changes-box">
                    <div className="day">
                        <h3>Daily</h3>
                        <p className="change">{item.market_data.price_change_percentage_24h < 0 ? (<p className='coin-percent red'>{Number(item.market_data.price_change_percentage_24h).toFixed(2)}%</p>) : (<p className='coin-percent green'>{Number(item.market_data.price_change_percentage_24h).toFixed(2)}%</p>)}</p>
                    </div>
                    <div className="week">
                        <h3>Weekly</h3>
                        <p className="change">{item.market_data.price_change_percentage_7d < 0 ? (<p className='coin-percent red'>{Number(item.market_data.price_change_percentage_7d).toFixed(2)}%</p>) : (<p className='coin-percent green'>{Number(item.market_data.price_change_percentage_7d).toFixed(2)}%</p>)}</p>
                    </div>
                    <div className="month">
                        <h3>Monthly</h3>
                        <p className="change">{item.market_data.price_change_percentage_30d < 0 ? (<p className='coin-percent red'>{Number(item.market_data.price_change_percentage_30d).toFixed(2)}%</p>) : (<p className='coin-percent green'>{Number(item.market_data.price_change_percentage_30d).toFixed(2)}%</p>)}</p>
                    </div>
                    <div className="year">
                        <h3>Yearly</h3>
                        <p className="change">{item.market_data.price_change_percentage_1y < 0 ? (<p className='coin-percent red'>{Number(item.market_data.price_change_percentage_1y).toFixed(2)}%</p>) : (<p className='coin-percent green'>{Number(item.market_data.price_change_percentage_1y).toFixed(2)}%</p>)}</p>
                    </div>
                </div>
                
            </div> 
        </div>
 
    );
}

export default CoinDetails;


