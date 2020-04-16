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
      loadingChampions: true,
      displayChampion: {},
      championsSearchTerm: "",
      championsSortType: "",
      championsRoleFilters: [],
      championsDifficultyFilter: "",
      display_message: false,
      message_class: "",
      message_text: "",
      login_status: false,
      summoner: {},
      summonerLoginStatus: {errors: "Please Login!"}
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
      }, ()=>this.setState({ loadingChampions: false }))
    })
  }

  filterChampions = () => {
    let filteredChampions = []

    // search by name
    if (this.state.championsSearchTerm) {
      this.state.champions.forEach(champion => {if (champion.name.toLowerCase().includes(this.state.championsSearchTerm.toLowerCase())) filteredChampions.push(champion)})
    } else {
      filteredChampions = this.state.champions
    }

    // filter by role
    if (this.state.championsRoleFilters.length > 0) {
      filteredChampions = filteredChampions.filter(champion => this.checkIfChampionRolesMatchFilter(champion))
    }

    // filter by difficulty
    if (this.state.championsDifficultyFilter) {
      let minDifficulty = 0
      let maxDifficulty = 0
      switch (this.state.championsDifficultyFilter) {
        case 'easy':
          minDifficulty = 1
          maxDifficulty = 3
          break
        case 'medium':
          minDifficulty = 4
          maxDifficulty = 7
          break
        case 'hard':
          minDifficulty = 8
          maxDifficulty = 10
          break
        default:
      }
      filteredChampions = filteredChampions.filter(champion => champion.info.difficulty >= minDifficulty && champion.info.difficulty <= maxDifficulty)
    }

    this.sortChampions(filteredChampions)
  }

  sortChampions = (newDisplayChampions=this.state.displayChampions) => {
    switch (this.state.championsSortType) {
      case 'alphabetically':
        newDisplayChampions.sort((a,b) => a.name.localeCompare(b.name))
        break
      default:
    }

    this.setState({
      displayChampions: newDisplayChampions
    })
  }

  // consider using debounce
  searchChampions = (term) => {
    this.setState({ championsSearchTerm: term },
      ()=>this.filterChampions())
  }
  
  sortChampionsByType = (type) => {
    this.setState({ championsSortType: type },
      ()=>this.sortChampions())
  }

  filterChampionsByRole = (role) => {
    if (this.state.championsRoleFilters.includes(role)) {
      for (const r of this.state.championsRoleFilters) {
        if (r === role) {
          this.state.championsRoleFilters.splice(this.state.championsRoleFilters.indexOf(r), 1)
        }
      }
    } else {
      this.state.championsRoleFilters.push(role)
      if (this.state.championsRoleFilters.length > 2) {
        this.state.championsRoleFilters.shift()
      }
    }
    this.filterChampions()
  }

  checkIfChampionRolesMatchFilter = (champion) => {
    return this.state.championsRoleFilters.every(r => champion.roles.includes(r))
  }

  filterChampionsByDifficulty = (difficulty) => {
    if (this.state.championsDifficultyFilter === difficulty) {
      this.setState({ championsDifficultyFilter: "" },
        ()=>this.filterChampions())
    } else {
      this.setState({ championsDifficultyFilter: difficulty },
        ()=>this.filterChampions())
    }
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
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        summonerName
      })
    }
    fetch('http://localhost:3000/search_summoner',obj)
      .then(resp => resp.json())
      .then(summoner => this.setState({summoner}))
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
            />}
          />

          <Route exact path = "/champions" render = {(routerProps) => 
            <ChampionsContainer 
              {...routerProps}
              champions={this.state.displayChampions}
              loadingChampions={this.state.loadingChampions}
              setChampionId={this.setChampionId}
              searchChampions={this.searchChampions}
              championsSearchTerm={this.state.championsSearchTerm}
              championsSortType={this.state.championsSortType}
              championsRoleFilters={this.state.championsRoleFilters}
              championsDifficultyFilter={this.state.championsDifficultyFilter}
              sortChampionsByType={this.sortChampionsByType}
              filterChampionsByRole={this.filterChampionsByRole}
              filterChampionsByDifficulty={this.filterChampionsByDifficulty}
            />}
          /> 
        </div>
        </Router>
    )
  }
}