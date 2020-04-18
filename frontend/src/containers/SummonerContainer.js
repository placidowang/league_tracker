import React from 'react'
import ProfileContainer from './ProfileContainer.js'
import MatchContainer from './MatchContainer.js'
import SummonerChampionsContainer from './SummonerChampionsContainer'
import SummonerSearchBar from '../components/SummonerSearchBar.js'

export default class SummonerContainer extends React.Component {

  constructor(){
    super()
    this.state = {
      showChampions: true,
      summoner: {},
    }
  }

  componentDidMount(){
    this.setUpState()
  }

  componentDidUpdate(prevProps){
    if(this.props.summoner !== prevProps.summoner){
      this.setUpState()
    }
    if(this.props.matches !== prevProps.matches){
      let summoner = this.state.summoner
      summoner.matches = this.props.matches
      this.setState({summoner})
    }
  }

  setUpState = () => {
    let summoner = this.props.summoner
    let champions = this.props.champions 
    let top_champions
    if(summoner.name){
      if(!summoner.champions[0].name){
        let champions_info = summoner.champions
        let top_4 = champions_info.map(champion => `${champion.championId}`)
        let top_4_info = 
          champions.filter(champion => top_4.includes(champion.key)).map(champion => {
            let summoner_champions = champions_info.find(champion_info => champion_info.championId == champion.key)
            return {
            id: champion.id, 
            name: champion.name,
            title: champion.title.toUpperCase(),
            icon_image: champion.icon_image, 
            champion_level: summoner_champions.championLevel,
            champion_points: summoner_champions.championPoints
          }})
        top_champions = top_4_info.sort((a,b) => b.champion_points - a.champion_points)
        summoner.champions = top_champions
        summoner.matches = []
      }
    } else {
      top_champions = null 
    }

    this.setState({summoner,showChampions: true})
  }

  render() {
    console.log(this.state.summoner)
    return(
      <div>
        <div className="summoner_main_container">

          <div className="summoner_info_container">
          <SummonerSearchBar searchSummoner = {this.props.searchSummoner} summoner={this.state.summoner}/>
              {this.state.summoner.name ? 
                <div className="champions_match_btn">
                  <button className="history_match_champions_btn" onClick={() => this.setState({showChampions: !this.state.showChampions})}>{this.state.showChampions ? "Show Match History" : "Show Champion" }</button>
                </div>
                  : null 
              }
            <ProfileContainer summoner = {this.state.summoner} addSummonerProfile = {this.props.addSummonerProfile}/>
            {this.state.showChampions ?
                <SummonerChampionsContainer 
                champions = {this.state.summoner.champions}
                setChampionId = {this.props.setChampionId}
                history = {this.props.history}
                showMatches={this.props.showMatches}
                matches={this.props.matches}
                displayMatches={this.props.displayMatches}
              />
              :
                this.props.matches[0] ? 
                  <MatchContainer 
                    matches={this.props.matches} 
                    champions={this.props.champions}
                  />
                : 
                  <div className = "match_container summoner_info_item loading">
                    <div class="spinner-border" role="status">
                      <span class="sr-only"></span> 
                    </div>
                    <label className="loading_label">Loading....</label>
                  </div>
            } 
          </div>
        </div>
    </div>
    )
  }
}