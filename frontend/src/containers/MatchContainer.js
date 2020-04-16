import React from 'react'
import MatchCard from '../components/MatchCard';

export default class MatchContainer extends React.Component {
  render() {
    // console.log(this.props.matches)
    return(
      <div className = "match_container summoner_info_item">
          <button onClick={() => this.props.showMatches()}>{this.props.displayMatches === false ? "Show Match History" : "Hide Match History"}</button>
          <div>
            {this.props.displayMatches === true ? this.props.matches.map(match => <MatchCard match={match}/>) : null}
          </div>
      </div>
    )
  }
}