import React from "react";
import logo from "../assets/images/Gentile Logo/Gentile_logo_Brown.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={logo} alt="gentile-logo-white" className="logo" />
      <div className='frame1'>
        <p className="Subheader">Aboute Gentile</p>
        <p className="Subheader">Privacy & Terms</p>
        <p className="Subheader">Our Stores</p>
        <p className="Subheader">FAQs</p>
      </div>
      <p className="small-text">2023, UXDI Inc.</p>
    </div>
  );
};

export default Footer;
