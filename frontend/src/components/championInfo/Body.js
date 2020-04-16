import React , {Component} from 'react'
import Video from './Video'
import ReactHtmlParser from 'react-html-parser'

export default class Body extends Component {

    displayChampionAbilities = (abilities) => {
        return abilities.map(a => {
            return(
                <div className="media position-relative ability">
                    <img src={a.image} className="mr-3" alt="ability"/>
                    <div className="media-body">
                        {/* may not need id */}
                        <h1>{a.id}</h1>
                        <h3>{a.name}</h3>
                        <p>- Description: {ReactHtmlParser(a.description)}</p>
                        <p>- Cooldown: {a.cooldown.join("/")}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        let champion = this.props.champion
        return (
            <div className="champion_body">
                <div className="champion_info_container">
                    <h1 className="champion_info_title">STATS</h1>
                    {Object.keys(champion.stats).map(key => <label><strong>{key.charAt(0).toUpperCase() + key.replace(/^\w/, "")}</strong>: {champion.stats[key]}</label>)}
                    <label><strong>Resourcetype</strong>: {champion.partype}</label>
                </div>
                <div className="champion_info_container">
                    <h1 className="champion_info_title">LORE</h1>
                    <p>{champion.lore}</p>
                </div>
                <div className="champion_info_container">
                    <h1 className="champion_info_title">ALLYTIPS</h1>
                    {champion.allytips.map(allytip => <p>-{allytip}</p>)}
                </div>
                <div className="champion_info_container">
                    <h1 className="champion_info_title">ENEMYTIPS</h1>
                    {champion.enemytips.map(enemytip => <p>-{enemytip}</p>)}
                </div>
                <div className="row">
                    <div className="col">
                        <h1 className="champion_ability_title">ABILITIES</h1>
                        <div className="media position-relative ability">
                            <img src={champion.passive.image} className="mr-3" alt="ability"/>
                            <div className="media-body">
                                <h1>{champion.name} Passive</h1>
                                <h3>{champion.passive.name}</h3>
                                {/* <p>- Description: {champion.passive.description.replace(/<[^>]*>/g, '')}</p> */}
                                <p>- Description: {ReactHtmlParser(champion.passive.description)}</p>
                            </div>
                        </div>
                        {this.displayChampionAbilities(champion.spells)}
                    </div>
                    <div className="col">
                        <h1 className="champion_spotlight_title">CHAMPION SPOTLIGHT</h1>
                        <div className="embed-responsive embed-responsive-16by9 champion_spotlight">
                            <Video name = {champion.name} videoId = {champion.videoId}/>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}