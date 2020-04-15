import React from 'react'
import ChampionSearchBar from '../components/ChampionSearchBar.js'
import ChampionsCardContainer from './ChampionsCardContainer.js'
import { Card, Placeholder } from 'semantic-ui-react'



export default class ChampionsContainer extends React.Component {
  render() {
    // console.log(this.props.history)
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
