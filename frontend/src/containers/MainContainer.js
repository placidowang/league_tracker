import React from 'react'
import SummonerContainer from './SummonerContainer.js'
import ChampionsContainer from './ChampionsContainer.js'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import NavBar from '../components/NavBar'
import ChampionInfo from '../components/ChampionInfo'
import {BrowserRouter as Router, Route} from 'react-router-dom'


export default class MainContainer extends React.Component {
  constructor() {
    super()

    this.state={
      summonerProfile: {}, // setState when searching API for a specific summoner profile
      champions: [],
      displayChampions: [],
      displayChampion: {},
      display_message: false,
      message_class: "",
      message_text: "",
      login_status: false,
      summoner: {},
      summonerLoginStatus: {errors: "Please Login!"},
      matches: [],
      displayMatches: false,
    }
  }

  componentDidMount() {
    localStorage.clear()
    fetch('http://localhost:3000/champions')
    .then(r => r.json())
    .then(champions => {
      this.setState({
        champions: champions,
        displayChampions: champions
      },
      )
    })
  }

  displayMessage = (message) => {
    let login_status = message === "Login Success" ? true : false
    this.setState({
      display_message: true, 
      message_class: "alert alert-success fade",
      message_text: message,
      login_status
    })

    setTimeout(() => {
      this.setState({
        display_message: false,
        message_class: "",
        message_text: "",
        summoner: {}
      })
    }, 3000);;
  }

  sortChampions = () => {

  }

  searchChampions = () => {

  }

  


  // searchSummoner = () => {
  //   let obj = {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${localStorage.token}`
  //     }
  //   }
  //   fetch('http://localhost:3000/search_summoner',obj)
  //     .then(resp => resp.json())
  //     .then(summoner => console.log(summoner))
  // }

  searchSummoner = (summonerName) => {
    let obj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        summonerName
      })
    }
    fetch('http://localhost:3000/search_summoner',obj)
      .then(resp => resp.json())
      .then(summoner => this.setState({summoner}))
  }

  showMatches = () => {
    fetch(`http://localhost:3000/show_matches`)
      .then(resp => resp.json())
      .then(matches => this.setState({
          matches,
          displayMatches: this.state.displayMatches === false ? this.state.displayMatches = true : this.state.displayMatches = false
      }))
  }
  
  setChampionId = (championId) => {
    fetch(`http://localhost:3000/champions/${championId}`)
    .then(res => res.json())
    .then(champion => this.setState({displayChampion: champion}))

  }

  checkForLogin = () => {
    let obj = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    }
    fetch("http://localhost:3000/summoner_profiles",obj)
    .then(res => res.json())
    .then(data => {
      let summonerLoginStatus = data.errors ? {errors: data.errors} : {}
      this.setState({summonerLoginStatus})
    })
  }

  render() {
    return(
      <Router>
        <div>
          <div 
            className={`${this.state.message_class} message`} 
            role="alert"
            >
            {this.state.display_message ? <h4>{this.state.message_text}</h4> : "" }
          </div>

          <NavBar 
            displayMessage = {this.displayMessage} 
            login_status = {this.state.login_status} 
            checkForLogin = {this.checkForLogin}
          />

          <Route exact path = "/login" render = {(routerProps) => 
            <Login 
              {...routerProps} 
              displayMessage = {this.displayMessage}
            />}
          /> 

          <Route exact path = "/signup" component = {SignUp} /> 

          <Route exact path = "/champion" render = {(routerProps) => 
            <ChampionInfo 
              {...routerProps} 
              displayChampion={this.state.displayChampion}
            />}
          /> 

          <Route exact path = "/summoner" render = {(routerProps) => 
            <SummonerContainer {...routerProps} 
              searchSummoner = {this.searchSummoner} 
              summoner = {this.state.summoner}
              summonerLoginStatus = {this.state.summonerLoginStatus}
              showMatches={this.showMatches}
              matches={this.state.matches}
              displayMatches={this.state.displayMatches}
              
            />}
          />

          <Route exact path = "/champions" render = {(routerProps) => 
            <ChampionsContainer 
              {...routerProps}
              champions={this.state.displayChampions}
              setChampionId={this.setChampionId}
            />}
          /> 
        </div>
        </Router>
    )
  }
}