import React from "react";
import fig from "../../assets/images/List View Edited (100x100) 72ppi/Fig.png";
import passion from "../../assets/images/List View Edited (100x100) 72ppi/Passion Fruit.png";
import vanilla from "../../assets/images/List View Edited (100x100) 72ppi/Vanilla Chocolate Chip.png";
import './table-cell-card.css'

export default function TableCellCard() {
  return (
    <div className="container-cell-card">
      <div className="frame-1">
        <div className="image-container">
          <img src={fig} alt="fig-flavour" className="fig-flavour" />
        </div>
        <div className="content-container">
          <div className="letter-table1">
            <p className="fig-title">Fresh White Fig</p>
            <p className="fig-p">Taste buds go to Mediterranean</p>
            <div className='table-cell__button'>
              Grab
            </div>
          </div>
        </div>
      </div>
      <div className="frame-2">
        <img src={passion} alt="passion-flavour" />
        <div className="letter-table2">
          <p className="passion-title">Passion Fruit</p>
          <p className="passion-p">Tangy sweet and tropical bliss</p>
          <div className='table-cell__button' >
            Grab
          </div> 
        </div>
      </div>
      <div className="frame-3">
        <img src={vanilla} alt="vanilla-flavoured" />
        <div className="letter-table3">
          <p className="vanilla-title">Vanilla Chocolate Chip</p>
          <p className="Vanilla-p">Irresistible, creamy and velvety</p>
          <div className='table-cell__button' >
            Grab
          </div>
        </div>
      </div>
    </div>
  );
}
