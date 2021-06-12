import React from 'react';
import '../Coin/Coin.scss';



const Coin = ({ name, price, volume, image, priceChange }) => {
  return (
      <div className="coin-container">
        <div className="top-section">
          <span className="coin-marketcap"><span className="volume">Volume:</span>{volume}</span>
        </div>
        <div className="middle-section">
          <img src={image} alt='crypto' />
          <h2>{name}</h2>
          <span>{priceChange < 0 ? (<p className='coin-percent red'>{Number(priceChange).toFixed(2)}%</p>) : (<p className='coin-percent green'>{Number(priceChange).toFixed(2)}%</p>)}</span>
        </div>
        <div className="bottom-section">
          <span className="coin-price"><span className="price">Price:</span> ${Number(price).toFixed(2)}</span>
        </div>
      </div> 
  );
};

export default Coin;