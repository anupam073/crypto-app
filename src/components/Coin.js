import React from 'react';
import '../components/Coin.scss';


const Coin = ({ name, price, volume, image, priceChange }) => {
  return (
    <div className="coin-container">
      <div className="top-section">
        <p className='coin-marketcap'><span className="volume">Wolumen:</span>{volume.toLocaleString()}</p>
      </div>
      <div className="middle-section">
        <img src={image} alt='crypto' />
        <h2>{name}</h2>
        <p>{priceChange < 0 ? (<p className='coin-percent red'>{priceChange.toFixed(2)}%</p>) : (<p className='coin-percent green'>{priceChange.toFixed(2)}%</p>)}</p>
      </div>
      <div className="bottom-section">
        <p className="coin-price"><span className="price">Cena:</span> ${price.toFixed(3)}</p>
      </div>
    </div>
  );
};

export default Coin;