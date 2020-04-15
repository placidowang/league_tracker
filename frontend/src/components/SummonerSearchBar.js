import React from 'react'

export default class SummonerSearchBar extends React.Component {
  render() {
    
    return(
      <div>
        <form onSubmit={(e)=>this.props.searchValue(e.target.value)}>
          <input type="text" placeholder="Enter Summoner Name..." />
          <input type="submit" value="search" />
        </form>
      </div>
    )
  }
}