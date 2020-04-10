import React from 'react'
import NavBar from '../components/NavBar.js'
import SummonerContainer from './SummonerContainer.js'
import MatchContainer from './MatchContainer.js'
import ChampionsContainer from './ChampionsContainer.js'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import {BrowserRouter as Router, Route} from 'react-router-dom'

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
      <Router>
        <div>
          <NavBar />
          <Route exact path = "/login" component = {Login} /> 
          <Route exact path = "/signup" component = {SignUp} /> 
          <Route exact path = "/summoner" render = {(routerProps) => <SummonerContainer {...routerProps} />} />
          <MatchContainer /> 
          <Route exact path = "/champions" render = {(routerProps) => 
            <ChampionsContainer 
              {...routerProps}
              champions={this.state.displayChampions}
            />}/> 
        </div>
      </Router>
    )
  }
}