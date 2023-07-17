import React, { useState } from 'react';
import image from '../../assets/images/Full Card Edited (363x250) 72ppi/Pistachio.png';
import './full-card.css';

function FullCard() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`full-card`}>
      <div className='full-card__image-container'>
        <img className='full-card__image' src={image} alt='placeholder' />
      </div>
      <div className={`full-card__content ${mode}`}>
        <h3 className={`full-card__title ${mode}`}>Pistachio</h3>
        <p className={`full-card__description ${mode}`}>
          Harmonious blend: creamy vanilla, roasted pistachios, and tangy pomegranate
        </p>
        <div className='full-card__button' onClick={toggleMode}>
          Grab
        </div>
      </div>
    </div>
  );
}

export default FullCard;
