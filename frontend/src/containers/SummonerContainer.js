import React from 'react'
import ProfileContainer from './ProfileContainer.js'
import MatchContainer from './MatchContainer.js'
import SummonerSearchBar from '../components/SummonerSearchBar.js'

export default class SummonerContainer extends React.Component {
  render() {

    console.log(this.props.searchSummoner())
    
    return(
      <div>
        {/* {this.props.searchSummoner()} */}
        SummonerContainer
        <SummonerSearchBar />
        <ProfileContainer />
        <MatchContainer />
      </div>
    )
  }
}