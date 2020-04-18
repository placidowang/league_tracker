import React , {Component} from "react" 
import ProfileContainer from "./ProfileContainer"
import SummonerChampionsContainer from './SummonerChampionsContainer'
import MatchContainer from './MainContainer'

export default class UserProfile extends Component{
    constructor(){
        super()
        this.state = {
            summoner:  {} 
        }
    }

    handelLogin = () => {
        this.props.history.push("/")
        alert("Please Login To See Your Profile")
    }

    componentDidMount(){
        this.getUserInfo()
    }

    getUserInfo = () => {
        let obj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token: localStorage.token
            })
        }
        fetch("http://localhost:3000/getProfile",obj)
        .then(res => res.json())
        .then(data => this.setState({summoner: data.profile}))
    }

    render(){
        return(
            <div>
                <div className="summoner_main_container">

                    <div className="summoner_info_container">
                        {!!localStorage.token ? 
                            <div>   
                                <ProfileContainer summoner = {this.state.summoner}/>
                                {!this.props.displayMatches ?
                                    <SummonerChampionsContainer 
                                    champions = {this.state.summoner.champions}
                                    setChampionId = {this.props.setChampionId}
                                    history = {this.props.history}
                                />
                                :
                                <MatchContainer  
                                matches={this.state.summoner.matches} 
                                champions={this.state.summoner.champions}
                                />
                                } 
                            </div>
                            :
                            this.handelLogin()
                        }
                    </div>
                </div>
            </div>
        )
    }
}