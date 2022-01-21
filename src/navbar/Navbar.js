import './navbar.scss';
import React from 'react';
import Logo from '../images/leaselabs_logo_fullstack_rgb.png';

const Navbar = () => {
  return (
    <div id="navbar-container">
      <div id="navbar">
        <img src={Logo} alt="logo" />
        <ul id="navbar-item-container">
          <li className="navbar-item">HOME</li>
          <li className="navbar-item">OUR WORK</li>
          <li className="navbar-item">ABOUT US</li>
          <li className="navbar-item">CONTACT US</li>
          <li className="navbar-item">
            <p>SPECIALS</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
