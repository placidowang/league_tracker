import React from 'react'
import ProfileContainer from './ProfileContainer.js'
import MatchContainer from './MatchContainer.js'
import SummonerSearchBar from '../components/SummonerSearchBar.js'

export default class SummonerContainer extends React.Component {
  render() {
    return(
      <div>
        SummonerContainer
        <SummonerSearchBar />
        <ProfileContainer />
        <MatchContainer />
      </div>
    )
  }
}