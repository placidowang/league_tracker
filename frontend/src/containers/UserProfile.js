import React , {Component} from "react" 
import ProfileContainer from "./ProfileContainer"
import SummonerChampionsContainer from './SummonerChampionsContainer'
import MatchContainer from './MatchContainer'

export default class UserProfile extends Component{
    constructor(){
        super()
        this.state = {
            summoner:  {} ,
            showChampions: true,
            displayProfile: false,
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
        .then(data => data.profile ? this.setState({summoner: data.profile, displayProfile: true}) : this.setState({displayProfile: false}))
    }

    render(){
        console.log(this.state.summoner)
        return(
            <div>
                <div className="summoner_main_container">

                    <div className="summoner_info_container">
                        {this.state.displayProfile ? 
                            <div className="champions_match_btn">
                                <button className="history_match_champions_btn" onClick={() => this.setState({showChampions: !this.state.showChampions})}>{this.state.showChampions ? "Show Match History" : "Show Champion" }</button>
                            </div>
                        : 
                            null 
                        }
                        {localStorage.token ? 
                            <div>
                                {this.state.displayProfile ? 
                                    <div>
                                        <ProfileContainer summoner = {this.state.summoner}/>
                                        {this.state.showChampions ?
                                            <SummonerChampionsContainer 
                                            champions = {this.state.summoner.champions}
                                            setChampionId = {this.props.setChampionId}
                                            history = {this.props.history}
                                            />
                                        :
                                            <MatchContainer  
                                                matches={this.state.summoner.matches} 
                                                champions={this.props.champions}
                                            />
                                        }
                                    </div>
                                : 
                                    <div className="no_profile">
                                        <h1>No Profile</h1>
                                    </div>
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