import React from 'react'

export default class ProfileContainer extends React.Component {
  render() {
    let summoner = this.props.summoner
    return(
      <div className="profile_container summoner_info_item">
        {summoner.name 
          ? 
            <div>
              <div className="summoner_header">
                <div className="summoner_name">
                  <h1>{summoner.name}</h1>
                </div>
                <img src={summoner.profileImage} alt={`${summoner.name} profile`}/>
                <div className="summoner_level">
                  <label>{summoner.summonerLevel}</label>
                </div>
              </div>
              <div className="summoner_ranks">
                <h4>{summoner.rankType}</h4>
                <h4>{summoner.tier} {summoner.rankLevel}</h4>
                <img src={`./images/ranked-emblems/Emblem_${summoner.tier}.png`} alt="rank_image"/>
                <h4>{`${summoner.wins}W \ ${summoner.losses}L`}</h4>
                <h4>{`Win Ratio ${Math.floor(summoner.wins/(summoner.wins+summoner.losses)*100)}%`}</h4>
              </div>
              {/* <div className="add_to_profile_button">
                <button className="add_to_profile_btn" onClick={() => {
                  // this.props.checkForLogin()
                  this.props.addSummonerProfile(summoner)
                }}>
                  Add To Profile
                </button>
              </div> */}
            </div>
          : "Search for a summoner..."
        }
      </div>
    )
  }
}