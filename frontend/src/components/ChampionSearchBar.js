import React from 'react'

export default class ChampionSearchBar extends React.Component {
  render() {
    return(
      <div id='champion-search-bar-container'>

        <h3>Search for a Champion</h3>
        <input onChange={/* pass in an updateSearchTerm function from main container*/null} type='text' />

        <h3>Sort Champions</h3>
        <button>Alphabetically</button>
        {/* might not be doable, depends on champion.json */}
        <button>Recent</button>

        <h3>Filter Champions By Role</h3>
        <button>Assassin</button>
        <button>Fighter</button>
        <button>Mage</button>
        <button>Marksman</button>
        <button>Support</button>
        <button>Tank</button>

        <h3>Filter Champions By Difficulty</h3>
        <button>Easy</button>
        <button>Medium</button>
        <button>Hard</button>
      </div>
    )
  }
}