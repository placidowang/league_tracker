import React from 'react'
import ProfileContainer from './ProfileContainer.js'
import SummonerChampionsContainer from './SummonerChampionsContainer.js'
import SummonerSearchBar from '../components/SummonerSearchBar.js'

export default class SummonerContainer extends React.Component {
  render() {
    let summoner = this.props.summoner
    let champions = this.props.champions 
    let top_champions
    if(this.props.summoner.name){
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
    } else {
      top_champions = null 
    }

    return(
      <div>
        <div className="summoner_main_container">
          <SummonerSearchBar searchSummoner = {this.props.searchSummoner}/>
          <div className="summoner_info_container">
            <ProfileContainer summoner = {summoner}/>
            <SummonerChampionsContainer 
              champions = {top_champions}
              setChampionId = {this.props.setChampionId}
              history = {this.props.history}
            />
          </div>
        </div>
      </div>
    )
  }
}