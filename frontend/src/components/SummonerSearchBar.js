import React from 'react'

export default class SummonerSearchBar extends React.Component {

  handelSubmit = (e) => {
    e.preventDefault()
    this.props.searchSummoner(e.target[0].value.split(" ").join(""))
  }

  render() {
    return(
      <div className="summoner_search_bar_container">
        <form onSubmit = {(e) => this.handelSubmit(e)}>
          <div className="form-group search_bar_item search_bar">
            <input type="text" className="form-control" placeholder="Summoner Name"/>
          </div>
          <div className="form-group search_bar_item">
            <button type="submit" className="btn">Search</button>
          </div>
        </form>
      </div>
    )
  }
}