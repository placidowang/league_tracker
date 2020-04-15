import React from 'react'

export default class ChampionSearchBar extends React.Component {
  render() {
    return(
      <div id='champion-search-bar-container'>

        <h3>Search for a Champion</h3>
        <input onChange={(e)=>this.props.searchChampions(e.target.value)} type='text' />

        <h3>Sort Champions</h3>
        <button>Alphabetically</button>
        {/* might not be doable, depends on champion.json */}
        <button>Recent</button>

        <h3>Filter Champions By Role</h3>
        <label><input type='radio' value='Assassin' />Assassin</label>
        <label><input type='radio' value='Fighter' />Fighter</label>
        <label><input type='radio' value='Mage' />Mage</label>
        <label><input type='radio' value='Marksman' />Marksman</label>
        <label><input type='radio' value='Support' />Support</label>
        <label><input type='radio' value='Tank' />Tank</label>

        <h3>Filter Champions By Difficulty</h3>
        <label><input type='radio' value='Easy' />Easy</label>
        <label><input type='radio' value='Medium' />Medium</label>
        <label><input type='radio' value='Hard' />Hard</label>

        <h3>Position (stretch goal)</h3>
      </div>
    )
  }
}