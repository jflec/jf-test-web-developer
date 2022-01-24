import React from 'react';
import './sidenav.scss';

const SideNav = () => {
  return (
    <div id="side-nav-container">
      <ul className="sub-nav">
        <h1>SUBNAV</h1>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
      <ul className="sub-nav">
        <h1>RELATED LINKS</h1>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </div>
  );
};

export default SideNav;
