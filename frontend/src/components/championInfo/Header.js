import React , {Component} from 'react' 
import ChampionStatBars from '../ChampionStatBars.js'

export default class Header extends Component {
    render(){
        let champion = this.props.champion 
        return(
            <div className="champion_header">
                <img src={champion.skins[0].image} alt="img"/>
                <div className="champion_info">
                    <h3>{champion.title.toUpperCase()}</h3>
                    <label className="champion_name">{champion.name}</label>
                    <div className="item_container">
                        <div className="item_main_col">
                            <div className="item_col champion_roles">
                                {champion.roles.map(role =>
                                    <div className="champion_info_icons">
                                        <img size='medium' src={`./images/role-icons/${role.toLowerCase()}.jpeg`} alt={champion.name} />
                                        <h3>{role.toUpperCase()}</h3>
                                    </div>
                                )}
                            </div>
                            <div className="item_col">
                                <ChampionStatBars info={champion.info} />
                            </div>
                        </div>
                        <div className="champion_blurd item_main_col ">
                            <p>{champion.blurb}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}