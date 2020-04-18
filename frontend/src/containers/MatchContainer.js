import React from 'react'
import MatchCard from '../components/MatchCard';

export default class MatchContainer extends React.Component {
  render() {
    return(
      <div className = "match_container summoner_info_item">
      
          {this.props.matches.map(match => <MatchCard match={match} champions={this.props.champions}/>)}
        
      </div>
    )
  }
}