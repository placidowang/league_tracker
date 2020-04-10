import React from 'react'
import SearchBar from './SearchBar.js'
import {NavLink} from 'react-router-dom'

export default class NavBar extends React.Component {
  render() {
    return(
      <div>
        <SearchBar />
        <button >
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