import React from 'react';
import './Header.css';
import logo from '../../assets/images/Gentile Logo/Gentile_logo_Brown.png';

function Header() {
    return (
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-container">
          <button>
            Toggle Mode
          </button>
        </div>
      </div>
    );
};

export default Header;
