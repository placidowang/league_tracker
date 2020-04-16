import React from 'react'
import ProfileContainer from './ProfileContainer.js'
import MatchContainer from './MatchContainer.js'
import SummonerChampionsContainer from './SummonerChampionsContainer'
import SummonerSearchBar from '../components/SummonerSearchBar.js'

export default class SummonerContainer extends React.Component {
  render() {


    let summoner = this.props.summoner
    // let summonerLoginStatus = this.props.summonerLoginStatus
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

          <div className="summoner_info_container">
          {/* <button onClick={() => this.props.displayMatches === false ? this.props.showChampions() : this.props.showMatches()}>Test</button> */}
          <SummonerSearchBar searchSummoner = {this.props.searchSummoner} summoner={this.props.summoner}/>
         
            <ProfileContainer summoner = {summoner} />
            {this.props.displayMatches === false ?
                <SummonerChampionsContainer 
                champions = {top_champions}
                setChampionId = {this.props.setChampionId}
                history = {this.props.history}
                showMatches={this.props.showMatches}
                matches={this.props.matches}
                displayMatches={this.props.displayMatches}
              />
              :
              <MatchContainer 
              showMatches={this.props.showMatches} 
              matches={this.props.matches} 
              displayMatches={this.props.displayMatches}
              showChampions={this.props.showChampions}
              champions={this.props.champions}
              />
            } 
          </div>
        </div>
    </div>
    )
  }
}



//  {this.props.summonerLoginStatus.errors ? 
//               alert(this.props.summonerLoginStatus.errors)
//           : null}
//           <SummonerSearchBar searchSummoner = {this.props.searchSummoner} summoner={this.props.summoner}/>
//           <div className="summoner_info_container">
//             <ProfileContainer summoner = {summoner} checkForLogin={this.props.checkForLogin} addSummonerProfile={this.props.addSummonerProfile}/>
//             {true ? 
//               <SummonerChampionsContainer