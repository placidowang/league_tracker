import React from 'react'
import '../css/pure-css-progress-bars-master/assets/css/cssprogress.css'

export default class ChampionStatBars extends React.Component {
  render() {
    const attack = this.props.info.attack
    const defense = this.props.info.defense
    const magic = this.props.info.magic
    const difficulty = this.props.info.difficulty

    return(
      <div className='stat-container'>
        <div className='cssProgress'>
          <p>ATTACK: {attack}</p>
          <div className="progress2">
            <div className="cssProgress-bar cssProgress-danger" dataPercent={attack * 10} style={{transition: 'none 0s ease 0s', height: '7px', width: `${attack * 10}%`}}> <span className="cssProgress-label">{null}</span></div>
          </div>

          <p>DEFENSE: {defense}</p>
          <div className="progress2">
            <div className="cssProgress-bar cssProgress-success" dataPercent={defense * 10} style={{transition: 'none 0s ease 0s', height: '7px', width: `${defense * 10}%`}}> <span className="cssProgress-label">{null}</span></div>
          </div>

          <p>MAGIC: {magic}</p>
          <div className="progress2">
            <div className="cssProgress-bar cssProgress-default" dataPercent={magic * 10} style={{transition: 'none 0s ease 0s', height: '7px', width: `${magic * 10}%`}}> <span className="cssProgress-label">{null}</span></div>
          </div>

          <p>DIFFICULTY: {difficulty}</p>
          <div className="progress2">
            <div className="cssProgress-bar cssProgress-warning" dataPercent={difficulty * 10} style={{transition: 'none 0s ease 0s', height: '7px', width: `${difficulty * 10}%`}}> <span className="cssProgress-label">{null}</span></div>
          </div>
        </div>
      </div>
    )
  }
}
