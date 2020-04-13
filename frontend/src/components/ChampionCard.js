import React from 'react'
import { Grid, Card, Image, Reveal, Placeholder, Transition } from 'semantic-ui-react'

class ChampionCard extends React.Component {
  state={ showInfo: false }

  transition = () => {
    this.setState({
      showInfo: true
    })
  }



  render() {
    // console.log(this.props.champion.roles.shift().pop().split('", "'))
    // console.log(this.props.champion.info.attack)
    return(
      <Card className='champion-card' style={{backgroundColor: 'black'}} color='teal' onMouseOver={this.transition}>


        <Card.Content style={{height: 'auto', width: 'auto'}}>
          {/* <Transition className='top' visible={this.state.showInfo} animation='scale' duration={500} style={{position: 'absolute', top: 0}}>
            <h2>hello</h2>
          </Transition> */}


          <Image size='medium' className='profile-pic' src={this.props.champion.icon_image}/>
            
          <div className='role-icons'>
            {this.props.champion.roles.map(role => <div><img size='medium' style={{height: '100px', width: '100px'}} src={`./images/role-icons/${role.toLowerCase()}.jpeg`} /><h3 style={{position:'relative', top:'-40px'}}>{role.toUpperCase()}</h3></div>)}

            {/* {this.props.champion.roles.includes('Fighter') ? <div><Image size='medium' src={'./images/role-icons/fighter.jpeg'} /> <h3 style={{position:'relative', top:'-40px'}}>FIGHTER</h3></div> : null}
            {this.props.champion.roles.includes('Assassin') ? <div><Image size='medium' src={'./images/role-icons/assassin.jpeg'} /> <h3 style={{position:'relative', top:'-40px'}}>ASSASSIN</h3></div> : null} */}
          </div>
          <div className='stats'>
            <p>ATTACK: {this.props.champion.info.attack}</p>
            <p>DEFENSE: {this.props.champion.info.defense}</p>
            <p>MAGIC: {this.props.champion.info.magic}</p>
            <p>DIFFICULTY: {this.props.champion.info.difficulty}</p>
          </div>
        </Card.Content>




        {/* <Reveal instant animated='move up'>

          <Reveal.Content visible style={{height: '300px', width: '300px', position: 'absolute'}}>
            <Card.Content>
              <Image size='medium' src={this.props.champion.icon_image} />
            </Card.Content>
          </Reveal.Content>
          
          <Reveal.Content hidden style={{height: '300px', width: '300px', position: 'absolute'}}>
            <Card.Content>
            <Transition visible={this.state.showInfo} animation='scale' duration={500} style={{position: 'absolute', top: 0}}>
                  <h2>hello</h2>
                </Transition>
              <Image size='medium' src={this.props.champion.icon_image} style={{position: 'absolute', top: 0, zIndex: '-1'}}/> */}




              {/* <Placeholder>
                <Placeholder.Image size='large' square />
              </Placeholder> */}
              {/* <Image src='https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg' size='large' square /> */}




            {/* </Card.Content>
          </Reveal.Content>
        </Reveal> */}
        
        <Card.Content style={{
          // textTransform: uppercase
        }}>
          <h1 className='champion-name'>{(this.props.champion.name).toUpperCase()}</h1>
          <h5 className='champion-title'>{(this.props.champion.title).toUpperCase()}</h5>
        </Card.Content>
      </Card>
    )
  }

}

export default ChampionCard