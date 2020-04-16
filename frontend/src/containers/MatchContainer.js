import React from 'react'
import MatchCard from '../components/MatchCard';

export default class MatchContainer extends React.Component {
  render() {
  //   console.log(this.props.showChampions())
    return(
      <div className = "match_container summoner_info_item">
          <button onClick={() => this.props.showChampions()}>Show Champions</button>
      
            {this.props.matches.map(match => <MatchCard match={match} champions={this.props.champions}/>)}
        
      </div>
    )
  }
}