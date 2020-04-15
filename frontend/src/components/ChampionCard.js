import React from 'react'
// import {NavLink} from 'react-router-dom'
import ChampionStatBars from './ChampionStatBars.js'
import { Card, Image} from 'semantic-ui-react'

class ChampionCard extends React.Component {


  render() {
    return(
      <Card
        onClick={()=>
          {this.props.setChampionId(this.props.champion.id)
          this.props.history.push('/champion')
        }}
        className='champion-card'
        style={{backgroundColor: 'black'}}>


        <Card.Content style={{position: 'relative', zIndex: 0}}>
          <Image size='medium' className='profile-pic' src={this.props.champion.icon_image}/>
            
          <div className='champion-stats'>
            <div className='role-icons'>
              {this.props.champion.roles.map(role =>
                <div style={{zIndex: 1}}>
                  <img size='medium' style={{height: '100px', width: '100px'}} src={`./images/role-icons/${role.toLowerCase()}.jpeg`} />
                  <h3 style={{position:'relative', top:'-40px'}}>{role.toUpperCase()}</h3>
                </div>)}
            </div>

            <div style={{position: 'relative', top: '-30px'}}>
              <ChampionStatBars  info={this.props.champion.info} />
            </div>
          </div>
        </Card.Content>
        
        <Card.Content className='champion-name-title'>
          <h1 className='champion-name'>{(this.props.champion.name).toUpperCase()}</h1>
          <h5 className='champion-title'>{(this.props.champion.title).toUpperCase()}</h5>
        </Card.Content>
      </Card>
    )
  }
}

export default ChampionCard