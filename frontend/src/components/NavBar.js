import React from 'react'
// import SearchBar from './SearchBar'
import {NavLink} from 'react-router-dom'
import './NavBar.css';
import SideMenuToggle from './PopOutMenu/SideMenuToggle';

export default class NavBar extends React.Component {

  render() {
    return(

      <header className="header-nav">
        <nav className="navbar">
          {/* <div><SideMenuToggle /></div> */}
          <div className="navbar-logo"><a href="/"><img src="./images/LT-logo.png" alt="LT logo"/></a></div>
          <div className="spacer" />
          <div className="navbar-navigation-items">
            <ul>
              <li>
                <button onClick = {() => {
                  window.scrollTo(0, 0)
                }} className="navbar-button">
                  <NavLink to = "/summoner">Summoner</NavLink>
                </button>
              </li>
              <li>
                <button onClick = {() => window.scrollTo(0, 0)} className="navbar-button">
                  <NavLink to = "/champions">Champions</NavLink>
                </button>
              </li>  
              {/* <li>
                <button>
                  <NavLink to = "/champion" >Champion Info</NavLink>
                </button>
              </li> */}
              {
                this.props.login_status ?  
                  <li>
                    <button onClick= {() => {
                      window.scrollTo(0, 0)
                      localStorage.clear()
                      this.props.checkForLogin()
                      this.props.displayMessage("LogOut Success")
                    }} className="navbar-button">
                      LogOut
                   </button>
                  </li>
                : 
                  <li>
                    <button onClick= {() => {
                      window.scrollTo(0, 0)
                      localStorage.clear()
                    }} className="navbar-button">
                      <NavLink to = "/login">Login</NavLink>
                    </button>
                  </li>
              }
            </ul>  
          </div>  
        
        </nav>
      </header>
    )
  }
}