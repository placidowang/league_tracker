import React , {Component} from 'react'
import Video from './Video'

export default class Skins extends Component {

    constructor(){
        super()
        this.state = {
            skinIndex: 0,
            display_skin_video: false
        }
    }

    handleClick = (num,max) => {
        let skinIndex = this.state.skinIndex + num > max ? 0 : this.state.skinIndex + num < 0 ? max : this.state.skinIndex + num
        this.setState({skinIndex})
    } 

    render(){
        let skins = this.props.skins
        return(
            <div className="skin_container">
                <h1 className="champion_skins_title">SKINS</h1>
                <div className="carousel slide carousel-fade skin_image" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="champion_skin_title">{skins[this.state.skinIndex].name}</h1>
                                {this.state.skinIndex !== 0 
                                    ? <button class="skin_btn" onClick = {() => this.setState({display_skin_video: true})}>Video</button>
                                    : null
                                }
                            </div>
                            <img src={skins[this.state.skinIndex].image} className="d-block w-100" alt={skins[this.state.skinIndex].name}/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" onClick = {() => this.handleClick(-1,skins.length - 1)}>
                        <span className="carousel-control-prev-icon slide_button" aria-hidden="true"></span>
                    </a>
                    <a className="carousel-control-next" onClick = {() => this.handleClick(1, skins.length - 1)}>
                        <span className="carousel-control-next-icon slide_button" aria-hidden="true"></span>
                    </a>
                </div>
                {this.state.skinIndex !== 0 && this.state.display_skin_video
                    ?
                    <div className="skin_video_container">
                        <label className="champion_skin_title">
                            {this.state.skinIndex === 0 ? this.props.champion_name : skins[this.state.skinIndex].name}
                        </label>
                        <small onClick={() => this.setState({display_skin_video: false})}>&#215;</small>
                        <div className="skin_video embed-responsive embed-responsive-16by9">
                            <Video name = {skins[this.state.skinIndex].name} videoId = {skins[this.state.skinIndex].videoId} />
                        </div>
                    </div>
                    : null 
                }
            </div>
        )
    }
}