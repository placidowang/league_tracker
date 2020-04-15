import React from 'react'
import ChampionCard from '../components/ChampionCard.js'
import { Card, Placeholder } from 'semantic-ui-react'

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

class ChampionsCardContainer extends React.Component {

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
    return(
      <div id="champions-card-container">
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

export default ChampionsCardContainer