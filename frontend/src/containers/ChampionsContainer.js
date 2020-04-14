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
      array.slice(i, i+4).map(el => el)
    )
  }

  generatePlaceholderRows = (array, numberOfRows) => {
    const rows = []
    for (let i = 0; i < numberOfRows; i++) {
      rows.push(this.generateRows(array, i*4))
    }
    return rows
  }

  render() {
    // console.log(this.props.history)
    return(
      <div style={{width: '1200px', margin: '0px 0px', position: 'relative', left: '50vw', transform: 'translateX(-50%)'}}>
        <ChampionSearchBar />

        <Card.Group itemsPerRow={4}>
          {this.props.champions.length > 0
            ? this.props.champions.map(champion =>
              <ChampionCard
                history={this.props.history}
                champion={champion}
                setChampionId={this.props.setChampionId} />)
            : this.generatePlaceholderRows(placeholders, 4)}
        </Card.Group>
      </div>
    )
  }
}
