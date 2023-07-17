import React from 'react'
import flavor from '../../assets/images/List View Edited (100x100) 72ppi/Amaretto Crunch.png'

export default function FlavorCard(props) {
    const textSplit = props.text.split(' ');

    return (
    <div className='flavor-card-container'>
        <div className='flavor-image-container'> <img src={props.image} className='flavor-image'/> </div>
        <div classNam='flavor-text-container'>
            <p className='flavor-text'>{textSplit[0]}<br/>{textSplit[1]}</p>
        </div>
    </div>
  )
}
