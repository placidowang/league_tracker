import React , {Component} from 'react'

export default class Video extends Component {
    render() {
        let videoId = this.props.videoId
        let name = this.props.name
        return(
            <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${videoId}`} title={name}></iframe>
        )
    }
}