import React from 'react'

export default class ChampionSearchBar extends React.Component {
  isSortSelected = (value) => {
    return this.props.championsSortType === value
    ? 'sort-filter-option selected'
    : 'sort-filter-option'
  }
  
  isRoleFilterSelected = (role) => {
    return this.props.championsRoleFilters.includes(role)
    ? 'sort-filter-option selected'
    : 'sort-filter-option'
  }

  isDifficultyFilterSelected = (difficulty) => {
    return this.props.championsDifficultyFilter === difficulty
    ? 'sort-filter-option selected'
    : 'sort-filter-option'
  }

  render() {
    return(
      <div id='champion-search-bar-container'>

        <div className='sort-filter-part'>
          <h3>Search for a Champion</h3>
          <input onChange={(e)=>this.props.searchChampions(e.target.value)} type='text' />
        </div>

        <div className='sort-filter-part'>
          <h3>Sort Champions</h3>
          <button onClick={()=>this.props.sortChampionsByType('alphabetically')} className={this.isSortSelected('alphabetically')}>Alphabetically</button>

          {/* might not be doable, depends on champion.json */}
          <button style={{color: 'darkgrey'}} className={this.isSortSelected('byReleaseDate')}>By Release Date</button>
        </div>

        <div className='sort-filter-part'>
          <h3>Filter Champions By Role</h3>
          <button
            onClick={(e)=>this.props.filterChampionsByRole(e.target.value)}
            className={this.isRoleFilterSelected('Assassin')}
            value='Assassin'>Assassin</button><br/>
          <button
            onClick={(e)=>this.props.filterChampionsByRole(e.target.value)}
            className={this.isRoleFilterSelected('Fighter')}
            value='Fighter'>Fighter</button><br/>
          <button
            onClick={(e)=>this.props.filterChampionsByRole(e.target.value)}
            className={this.isRoleFilterSelected('Mage')}
            value='Mage'>Mage</button><br/>
          <button
            onClick={(e)=>this.props.filterChampionsByRole(e.target.value)}
            className={this.isRoleFilterSelected('Marksman')}
            value='Marksman'>Marksman</button><br/>
          <button
            onClick={(e)=>this.props.filterChampionsByRole(e.target.value)}
            className={this.isRoleFilterSelected('Support')}
            value='Support'>Support</button><br/>
          <button
            onClick={(e)=>this.props.filterChampionsByRole(e.target.value)}
            className={this.isRoleFilterSelected('Tank')}
            value='Tank'>Tank</button><br/>
        </div>
        
        <div className='sort-filter-part'>
          <h3>Filter Champions By Difficulty</h3>
          {/* <label><input type='radio' onChange={()=>this.props.filterChampionsByDifficulty('easy')} checked={this.props.championsDifficultyFilter === 'easy'} value='easy' />Easy</label><br/> */}

          <button
            onClick={(e)=>this.props.filterChampionsByDifficulty(e.target.value)}
            className={this.isDifficultyFilterSelected('easy')}
            value='easy'>Easy</button><br/>
          <button
            onClick={(e)=>this.props.filterChampionsByDifficulty(e.target.value)}
            className={this.isDifficultyFilterSelected('medium')}
            value='medium'>Medium</button><br/>
          <button
            onClick={(e)=>this.props.filterChampionsByDifficulty(e.target.value)}
            className={this.isDifficultyFilterSelected('hard')}
            value='hard'>Hard</button><br/>
        </div>

        <div className='sort-filter-part'>
          {/* no way to tell with current champion.json data */}
          <h3>Position</h3>
          <button style={{color: 'darkgrey'}} className='sort-filter-option' value='topLane'>Top Lane</button><br/>
          <button style={{color: 'darkgrey'}} className='sort-filter-option' value='midLane'>Mid Lane</button><br/>
          <button style={{color: 'darkgrey'}} className='sort-filter-option' value='ADCarry'>AD Carry</button><br/>
          <button style={{color: 'darkgrey'}} className='sort-filter-option' value='support'>Support</button><br/>
          <button style={{color: 'darkgrey'}} className='sort-filter-option' value='jungle'>Jungle</button><br/>
        </div>
      </div>
    )
  }
}