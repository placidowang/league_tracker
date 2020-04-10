import React from 'react'
import NavBar from '../components/NavBar.js'
import SummonerContainer from './SummonerContainer.js'
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
        <NavBar />
        <SummonerContainer />
        <ChampionsContainer
          champions={this.state.displayChampions} />

      </div>
    )
  }
}