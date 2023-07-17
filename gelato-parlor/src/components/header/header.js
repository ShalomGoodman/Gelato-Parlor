import React, { useContext } from 'react';
import './Header.css';
import logo from '../../assets/images/Gentile Logo/Gentile_logo_Brown.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../context/themeContext';

function Header() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`header-container ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="toggle-container">
                <input 
                    type="checkbox" 
                    className="checkbox" 
                    id="checkbox" 
                    checked={isDarkMode}
                    onChange={toggleTheme}
                />
                <label htmlFor="checkbox" className="checkbox-label">
                    <FontAwesomeIcon icon={faMoon} />
                    <FontAwesomeIcon icon={faSun} />
                    <span className="ball"></span>
                </label>
            </div>
        </div>
    );
};

export default Header;
