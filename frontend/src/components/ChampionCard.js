import React from 'react'
import {NavLink} from 'react-router-dom'
import ChampionStatBars from './ChampionStatBars.js'
import { Grid, Card, Image, Reveal, Placeholder, Transition } from 'semantic-ui-react'

class ChampionCard extends React.Component {
  state={ showInfo: false }

  transition = () => {
    this.setState({
      showInfo: true
    })
  }

  render() {
    return(
      <Card
        onClick={()=>
          {this.props.setChampionId(this.props.champion.id)
          this.props.history.push('/champion')
          // this.setState({})
        }}
        className='champion-card'
        style={{backgroundColor: 'black'}}
        color='teal'
        onMouseOver={this.transition}>


        <Card.Content >
          <Image size='medium' className='profile-pic' src={this.props.champion.icon_image}/>
            
          <div className='role-icons'>
            {this.props.champion.roles.map(role =>
              <div>
                <img size='medium' style={{height: '100px', width: '100px'}} src={`./images/role-icons/${role.toLowerCase()}.jpeg`} />
                <h3 style={{position:'relative', top:'-40px'}}>{role.toUpperCase()}</h3>
              </div>)}
          </div>
          {/* <div className='stats'>
            <p>ATTACK: {this.props.champion.info.attack}</p>
            <p>DEFENSE: {this.props.champion.info.defense}</p>
            <p>MAGIC: {this.props.champion.info.magic}</p>
            <p>DIFFICULTY: {this.props.champion.info.difficulty}</p>
          </div> */}
          <div style={{position: 'relative', top: '-30px'}}>
            <ChampionStatBars  info={this.props.champion.info} />
          </div>
        </Card.Content>
        
        <Card.Content style={{}}>
          <h1 className='champion-name'>{(this.props.champion.name).toUpperCase()}</h1>
          <h5 className='champion-title'>{(this.props.champion.title).toUpperCase()}</h5>
        </Card.Content>
      </Card>
    )
  }
}

export default ChampionCard