import React from 'react'

export default class SummonerChampionsContainer extends React.Component {
  render() {
    // console.log(this.props.showMatches())
    let champions = this.props.champions 
    return(
      <div className = "match_container summoner_info_item">
        <button onClick={() => this.props.showMatches()}>Show Match History</button>
        <div className="top_champions">
        
          {
            champions ? champions.map(champion => 
              <div className="top_champion_item" onClick={()=>
                {this.props.setChampionId(champion.id)
                this.props.history.push('/champion')
              }}>
                <h2>{champion.name}</h2>
                <div className="summoner_champion_label">
                  <label>{champion.title}</label>
                </div>
                <img src={champion.icon_image} alt="img"/>
                <div className="summoner_champion_image">
                  <label>Level {champion.champion_level}</label><br/>
                  <div className="champion_level_banner">
                    <img src={`./images/stat-icons/Champion_Mastery_Level_${champion.champion_level}_Square.png`} alt="img"/>
                  </div>
                </div>
                <label>Champion Points {champion.champion_points}</label>
              </div>
            )
            : null
          }
        </div>
        </div>
      
    )
  }
}


{/* <SummonerChampionsCard setChampionId={this.props.setChampionId} history={this.props.history}/> */}
      {/* <button onClick={() => this.props.showMatches()}>Show Match History</button> */}
