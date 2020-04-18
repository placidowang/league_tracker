import React from 'react';
import './match.css'

export default class MatchCard extends React.Component {
    render() {
        let match = this.props.match
        let champion = this.props.champions.find(champ => champ.key == match.championId)
        return(
            <div>
                <div className="match_card">
                    <div className="match_items match_win_loss" style={{background: match.win ? "linear-gradient(to right, rgba(32, 153, 2, 0.5), rgba(195, 165, 104, 0))" : "linear-gradient(to right, rgba(185, 2, 2, 0.5), rgba(195, 165, 104, 0))"}}>
                        <h3>{match.win === true ? "WIN" : "LOSS"}</h3> 
                    </div>   
                    <div className="match_items match_info">
                        <div className="match_champion_icon">
                            <h1>{champion.name}</h1>
                            <div className="match_champion_icon_image match_display_inline_block ">
                                <img src={champion.icon_image} />
                            </div>
                            <div className="match_champion_icon_item match_display_inline_block">
                                <img src={match.spell1Id} alt="icon"/>
                                <img src={match.spell2Id} alt="icon"/>
                            </div>
                            <div className="match_items_icon match_display_inline_block">
                                <img src={match.item0 === "http://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/0.png" ? "http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/items.png" : match.item0} alt="icon"/>

                                <img src={match.item1 === "http://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/0.png" ? "http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/items.png" : match.item1} alt="icon"/>

                                <img src={match.item2 === "http://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/0.png" ? "http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/items.png" : match.item2} alt="icon"/>

                                <img src={match.item3 === "http://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/0.png" ? "http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/items.png" : match.item3} alt="icon"/>
                                
                                <img src={match.item4 === "http://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/0.png" ? "http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/items.png" : match.item4} alt="icon"/>
                                <img src={match.item5 === "http://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/0.png" ? "http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/items.png" : match.item5} alt="icon"/>
                                <img src={match.item6 === "http://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/0.png" ? "http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/items.png" : match.item6} alt="icon"/>
                            </div>
                        </div>
                        <p>KDA: {match.kills}/{match.deaths}/{match.assists}</p>
                        <p>Gold Earned: {match.goldEarned}</p>
                    </div>           
                </div>
            </div>
            
        )
    }
}

