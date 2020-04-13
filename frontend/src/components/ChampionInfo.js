import React , {Component} from 'react'

export default class ChampionInfo extends Component {
    constructor(){
        super()
        this.state = {
            champion: {}
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.championId !== this.props.championId){
            fetch(` http://localhost:3000/champions/${1}`)
            .then(res => res.json())
            .then(champion => this.setState({champion}))
        }
    }

    displayChampionAbilities = (abilities) => {
        return abilities.map(a => {
            return(
                <div className="media position-relative ability">
                    <img src={a.image} className="mr-3" alt="ability"/>
                    <div className="media-body">
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
                                        <label className="info">Type: {champion.type.join(", ")}</label>
                                        <br/>
                                        <br/>
                                        <label className="info">Partype: {champion.partype}</label>
                                    </div>
                                    <div className="item_col">
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
                                    </div>
                                </div>
                                <div className="champion_blurd col ">
                                    <p>{champion.blurb}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="champion_body">
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
                </div>
            )
        }
    }

    render(){
        let champion = this.state.champion
        return(
            <div>
                {this.displayChampion(champion)}
            </div>
        )
    }
}