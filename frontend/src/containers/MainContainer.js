import React from 'react'
import SummonerContainer from './SummonerContainer.js'
import MatchContainer from './MatchContainer.js'
import ChampionCard from '../components/ChampionCard.js' // just to test
import SearchBar from '../components/SearchBar.js'
import ChampionsContainer from './ChampionsContainer.js'


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
      // ()=>{console.log(this.state.champions)}
      )
    })
  }

  sortChampions = () => {

  }

  searchChampions = () => {
    
  }

  render() {
    return(
      <div>
        MainContainer
        <SearchBar />
        <SummonerContainer />
        <MatchContainer />
        <ChampionsContainer
          champions={this.state.displayChampions} />

      </div>
    )
  }
}