import React from 'react'
import ProfileContainer from './ProfileContainer.js'
import MatchContainer from './MatchContainer.js'
import SummonerSearchBar from '../components/SummonerSearchBar.js'

export default class SummonerContainer extends React.Component {
  render() {
    console.log(this.props.matches)
    let summoner = this.props.summoner
    // let summonerLoginStatus = this.props.summonerLoginStatus
    console.log(summoner)
    return(
      <div>
        <div className="summoner_main_container">
          <SummonerSearchBar searchSummoner = {this.props.searchSummoner} summoner={this.props.summoner}/>
          <div className="summoner_info_container">
            <ProfileContainer summoner = {summoner}/>
            <MatchContainer showMatches={this.props.showMatches} matches={this.props.matches} displayMatches={this.props.displayMatches}/>
          </div>
        </div>
      </div>
    )
  }
}