import React from 'react'
import './NavBar.css';
import SideMenuToggle from './PopOutMenu/SideMenuToggle.js';

export default class NavBar extends React.Component {
  render() {
    return(
    <header className="header-nav">
      <nav className="navbar">
        <div>
          <SideMenuToggle />
        </div>
        <div className="navbar-logo"><a href="/">The Logo</a></div>
        <div className="spacer" />
        <div className="navbar-navigation-items">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Champions List</a></li>  
            <li><button className="logBtn">Log In/Log Out</button></li>
          </ul>  
        </div>  
      
      </nav>
    </header>
    )
  }
}