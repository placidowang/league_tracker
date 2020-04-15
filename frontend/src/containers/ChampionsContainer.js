import React from 'react'
import ChampionSearchBar from '../components/ChampionSearchBar.js'
import ChampionsCardContainer from './ChampionsCardContainer.js'

export default class ChampionsContainer extends React.Component {
  state={
    // ???
  }

  render() {
    return(
      <div id='champions-container'>
        <ChampionSearchBar />
        <ChampionsCardContainer
          champions={this.props.champions}
          history={this.props.history}
          setChampionId={this.props.setChampionId} />
      </div>
    )
  }
}
