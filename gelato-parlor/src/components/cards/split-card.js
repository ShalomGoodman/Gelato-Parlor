import React from 'react'
import './split-card.css'

function SplitCard({ title, description, image }) {
    return (
        <div className='split-card-light-hifi'>
            <div className='split-card-light-hifi-inner'>
                <div className='rectangle-parent'>
                    <div className='group-child' />
                    <img className='mustard1-icon' alt="" src={image} />
                </div>
            </div>
            <div className='gelato-type'>{title}</div>
            <div className='more-text1'>
                <p className='nutty-bliss-in'>{description}</p>
            </div>
            <div className='thin-button'>
                <div className='grab'>Grab</div>
            </div>
        </div>
    );
};

export default SplitCard
