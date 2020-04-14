import React , {Component} from 'react'
import ChampionStatBars from './ChampionStatBars.js'

export default class ChampionInfo extends Component {
    constructor(){
        super()
        // this.state = {
        //     champion: {}
        // }
    }

//     componentDidUpdate(prevProps){
//       console.log(prevProps.championId)
//       console.log(this.props.championId)
//         if(prevProps.championId !== this.props.championId){
//             fetch(`http://localhost:3000/champions/${this.props.championId}`) // ??????????????
//             .then(res => res.json())
//             .then(champion => this.setState({champion}))
//         }
//     }

    displayChampionAbilities = (abilities) => {
        return abilities.map(a => {
            return(
                <div className="media position-relative ability">
                    <img src={a.image} className="mr-3" alt="ability"/>
                    <div className="media-body">
                      {/* might not need id */}
                        <h1>{a.id}</h1>
                        <h3>{a.name}</h3>
                        <p>- Description: {a.description}</p>
                        <p>- Cooldown: {a.cooldown.join("/")}</p>
                    </div>
                </div>
            )
        })
    }
 
    displayChampion = (champion) => {
        if(champion.name){
            return (
                <div className="champion_container">
                    <div className="champion_header">
                        <img src={champion.skins[0].image} alt="img"/>
                        <div className="champion_info">
                            <h3>{champion.title.toUpperCase()}</h3>
                            <label className="champion_name">{champion.name}</label>
                            <div className="row ">
                                <div className="col">
                                    <div className="item_col">
                                        <label className="info">Roles: {champion.roles.join(", ")}</label>
                                        <br/>
                                        <br/>
                                        {/* consider renaming Partype to Resource, or have it not display at all */}
                                        <label className="info">Partype: {champion.partype}</label>
                                    </div>
                                    {/* <div className="item_col">
                                        <label className="info">
                                            Attack: {champion.info.attack}
                                        </label>
                                        <br/>
                                        <label className="info">
                                            Defense: {champion.info.defense}
                                        </label>
                                        <br/>
                                        <label className="info">
                                            Magic: {champion.info.magic}
                                        </label>
                                        <br/>
                                        <label className="info">Difficulty: {champion.info.difficulty}</label>
                                    </div> */}
                                    <ChampionStatBars info={champion.info} />
                                </div>
                                <div className="champion_blurd col ">
                                    <p>{champion.blurb}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="champion_body">
                        <div className="champion_info_container">
                            <h1 className="champion_info_title">Stats</h1>
                            {Object.keys(champion.stats).map(key => <label><strong>{key.charAt(0).toUpperCase() + key.replace(/^\w/, "")}</strong>: {champion.stats[key]}</label>)}
                        </div>
                        <div className="champion_info_container">
                            <h1 className="champion_info_title">Lore</h1>
                            <p>{champion.lore}</p>
                        </div>
                        <div className="champion_info_container">
                            <h1 className="champion_info_title">Allytips</h1>
                            {champion.allytips.map(allytip => <p>-{allytip}</p>)}
                        </div>
                        <div className="champion_info_container">
                            <h1 className="champion_info_title">Enemytips</h1>
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
                                        <p>- Description: {champion.passive.description.replace(/<[^>]*>/g, '')}</p>
                                    </div>
                                </div>
                                {this.displayChampionAbilities(champion.spells)}
                            </div>
                            <div className="col">
                                <h1 className="champion_spotlight_title">Champion Spotlight</h1>
                                <div className="embed-responsive embed-responsive-16by9 champion_spotlight">
                                    <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${champion.videoId}`} allowFullScreen title={champion.name}></iframe>
                                </div>
                            </div>
                        </div> 
                    </div>
                    {champion.skins.map(skin => 
                        <div>
                            <img src={skin.image}/>
                            <iframe src={`https://www.youtube.com/embed/${skin.videoId}`} frameborder="0"></iframe>
                        </div>
                    )}
                </div>
            )
        }
    }

    render(){
        let champion = this.props.displayChampion
        console.log(champion)
        return(
            <div>
                {this.displayChampion(champion)}
            </div>
        )
    }
}