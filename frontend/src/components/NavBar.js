import React from 'react'
import SearchBar from './SearchBar.js'
import {NavLink} from 'react-router-dom'

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
      <div>
        <SearchBar />
        <button onClick = {() => this.checkForLogin()}>
          <NavLink to = "/summoner">Summoner</NavLink>
        </button>
        <button >
          <NavLink to = "/champions">Champions</NavLink>
        </button>
        <button onClick= {() => localStorage.clear()}>
          <NavLink to = "/login">Login</NavLink>
        </button>
        <button onClick= {() => localStorage.clear()}>
          LogOut
        </button>
      </div>
    )
  }
}