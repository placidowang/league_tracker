import React from 'react'
import SummonerContainer from './SummonerContainer.js'
import ChampionsContainer from './ChampionsContainer.js'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import NavBar from '../components/NavBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'


export default class MainContainer extends React.Component {
  constructor() {
    super()

    this.state={
      summonerProfile: {}, // setState when searching API for a specific summoner profile
      champions: [],
      displayChampions: [],
      display_message: false,
      message_class: "",
      message_text: "",
      login_status: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/champions')
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
        message_text: ""
      })
    }, 3000);;
  }

  sortChampions = () => {

  }

  searchChampions = () => {

  }

  render() {
    return(
      <Router >
        <div>
          <div 
            class={`${this.state.message_class} message`} 
            role="alert"
            >
            {this.state.display_message ? <h4>{this.state.message_text}</h4> : "" }
          </div>
          <NavBar displayMessage = {this.displayMessage} login_status = {this.state.login_status}/>
          <Route exact path = "/login" render = {(routerProps) => <Login {...routerProps} displayMessage = {this.displayMessage}/>} /> 
          <Route exact path = "/signup" component = {SignUp} /> 
          <Route exact path = "/summoner" render = {(routerProps) => <SummonerContainer {...routerProps} />} />
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