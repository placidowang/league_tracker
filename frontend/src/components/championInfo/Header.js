import React , {Component} from 'react' 

export default class Header extends Component {
    render(){
        let champion = this.props.champion 
        return(
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
        )
    }
}