import React from 'react'
import NavBar from '../components/NavBar.js'
import SummonerContainer from './SummonerContainer.js'
import MatchContainer from './MatchContainer.js'
import ChampionCard from '../components/ChampionCard.js' // just to test

export default class MainContainer extends React.Component {
  constructor() {
    super()

    this.state={
      summonerProfile: {}, // setState when searching API for a specific summoner profile
      champions: [],
      displayChampions: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/champions')
    .then(r => r.json())
    .then(champions => {
      this.setState({
        champions: champions,
        displayChampions: champions
      },
      ()=>{console.log(this.state.champions)})
    })
  }

  render() {
    return(
      <div>
        MainContainer
        <NavBar />
        <SummonerContainer />
        <MatchContainer />
        
        {/* next line is just to test backend/frontend communication */}
        {this.state.displayChampions ?
          this.state.displayChampions.map(champion => <ChampionCard champion={champion} />) : null}
      </div>
    )
  }
}