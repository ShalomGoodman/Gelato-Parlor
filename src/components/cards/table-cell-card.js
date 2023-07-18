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
          <p className="title1">Fresh White Fig</p>
          <p className="p1">Taste buds go to Mediterranean</p>
          <button className="button1">Grab</button>
        </div>
      </div>
    </div>
      <div className="frame-2">
        <img src={passion} alt="passion-flavour" />
        <div className="letter-table2">
        <p>Passion Fruit</p>
          <p>Tangy sweet and tropical bliss</p>
          <button>Grab</button> 
        </div>
      </div>
      <div className="frame-3">
        <img src={vanilla} alt="vanilla-flavoured" />
        <div className="letter-table3">
        <p>Vanilla Chocolate Chip</p>
          <p>Irresistible, creamy and velvety</p>
          <button>Grab</button> 
        </div>
      </div>
    </div>
  );
}
