import React from 'react'
// import SearchBar from './SearchBar'
import {NavLink} from 'react-router-dom'
import './NavBar.css';
import SideMenuToggle from './PopOutMenu/SideMenuToggle';

export default class NavBar extends React.Component {

  checkForLogin = () => {
    let obj = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    }
    fetch("http://localhost:3000/summoner_profiles",obj)
    .then(res => res.json())
    .then(data => data.errors ? alert(data.errors) : alert(data.message))
  }
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
              <li>
                <button onClick = {() => this.checkForLogin()}>
                  <NavLink to = "/summoner">Summoner</NavLink>
                </button>
              </li>
              <li>
                <button >
                  <NavLink to = "/champions">Champions</NavLink>
                </button>
              </li>  
              <li>
                <button onClick= {() => localStorage.clear()}>
                  LogOut
                </button>
              </li>
              <li>
                <button onClick= {() => localStorage.clear()}>
                  <NavLink to = "/login">Login</NavLink>
                </button>
              </li>
            </ul>  
          </div>  
        
        </nav>
      </header>
    )
  }
}