import React , {Component} from 'react'
import Header from './championInfo/Header'
import Body from './championInfo/Body'
import Skins from './championInfo/Skins'

export default class ChampionInfo extends Component {

    componentDidUpdate(prevProps){
        if(prevProps.displayChampion !== this.props.displayChampion){
            console.log(prevProps.displayChampion)
            console.log(this.props.displayChampion)
            window.scrollTo(0, 0)
        }
    }
 
    displayChampion = (champion) => {
        if(champion.name){
            return (
                <div className="champion_container">
                    <Header champion = {champion} />
                    <Body champion = {champion} />
                    <Skins skins = {champion.skins} champion_name = {champion.name}/> 
                </div>
            )
        }
    }

    render(){
        let champion = this.props.displayChampion
        return(
            <div>
                {this.displayChampion(champion)}
            </div>
        )
    }
}