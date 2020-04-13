import React from 'react'
import ChampionCard from '../components/ChampionCard.js'
import ChampionSearchBar from '../components/ChampionSearchBar.js'
import { Card, Placeholder, Reveal, Image } from 'semantic-ui-react'

const placeholders = []
for (let i = 0; i < 16; i++) {
  placeholders.push(
    // <Grid.Column >
    //   <Placeholder style={{width: 150, height: 150}}>
    //     <Placeholder.Image />
    //     <Placeholder.Line />
    //   </Placeholder>
    // </Grid.Column>
    <Card>
      <Card.Content>
        <Placeholder>
          <Placeholder.Image inverted size='large' square />
        </Placeholder>
      </Card.Content>
      <Card.Content>
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      </Card.Content>
    </Card>
  )
}

export default class ChampionsContainer extends React.Component {

  generateRows = (array, i) => {
    return(
    // <Grid.Row inverted>
      array.slice(i, i+4).map(el => el)
    // </Grid.Row>
    )
  }

  generatePlaceholderRows = (array, numberOfRows) => { // abstract to create rows for both placeholders and for champions
    const rows = []
    for (let i = 0; i < numberOfRows; i++) {
      rows.push(this.generateRows(array, i*4))
    }
    return rows
  }

  render() {
    return(
      <div style={{width: '1200px', margin: '0px 0px', position: 'relative', left: '50vw', transform: 'translateX(-50%)'}}>
        <ChampionSearchBar />
        {/* <Grid columns={4} divided inverted padded> */}

        <Card.Group
          itemsPerRow={4}>
          {/* need to slice each row to get vertical dividers */}

          {this.props.champions.length > 0 ?
          this.props.champions.map(champion => <ChampionCard champion={champion} />) : this.generatePlaceholderRows(placeholders, 4)}
          {/* // this.generateRows(this.props.champions.map(champion => <ChampionCard champion={champion} />), 0) : null}

          // {this.props.champions.length > 0 ? */}
          {/* // this.generateRows(this.props.champions.map(champion => <ChampionCard champion={champion} />), 4) : null} */}

          {/* // {this.props.champions.length > 0 ? */}
          {/* // this.generateRows(this.props.champions.map(champion => <ChampionCard champion={champion} />), 8) : null} */}
          {/* <Grid.Row>
            {this.props.champions.length > 0 ?
            this.props.champions.slice(4,8).map(champion => <ChampionCard champion={champion} />) : console.log('No Champions!')}
          </Grid.Row> */}
        {/* </Grid> */}
        </Card.Group>
      </div>
    )
  }
}
