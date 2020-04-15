import React from 'react'
import ProfileContainer from './ProfileContainer.js'
import MatchContainer from './MatchContainer.js'
import SummonerSearchBar from '../components/SummonerSearchBar.js'

export default class SummonerContainer extends React.Component {
  render() {

    // console.log(this.props)
    
    return(
      <div>
        {/* {this.props.searchSummoner()} */}
        SummonerContainer
        <SummonerSearchBar searchValue={this.props.searchValue}/>
        <ProfileContainer />
        <MatchContainer />
      </div>
    )
  }
}