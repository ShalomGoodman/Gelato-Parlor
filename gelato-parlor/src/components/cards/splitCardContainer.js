import React from 'react';
import SplitCard from './split-card';
import mustardImage from './assets/images/Split Card Edited (170x158) 72ppi/Mustard.png';
import amarettoImage from './assets/images/Split Card Edited (170x158) 72ppi/Coffee.png';
import './card-container.css';

function SplitCardContainer() {
    return (
        <div className='card-container'>
            <SplitCard 
                title="Amaretto Delight" 
                description="Smooth harmony, vanilla and chocolate, and a hint of luscious amaretto" 
                image={amarettoImage}
            />
            <SplitCard 
                title="Pistachio Dream" 
                description="Nutty bliss in every scoop, premium pistachios take you" 
                image={mustardImage}
            />
            
        </div>
    );
};

export default SplitCardContainer;
