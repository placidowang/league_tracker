import React from 'react'
import ChampionCard from '../components/ChampionCard.js'
import { Card, Placeholder } from 'semantic-ui-react'

const placeholders = []
for (let i = 0; i < 148; i++) {
  placeholders.push(
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

  displayWithNoChampions = () => {
    if (this.props.loadingChampions) {
    } else {
      return 'no'
    }
  }
  
  renderChampions = () => {
    if (this.props.loadingChampions) {
      return placeholders
    } else if (this.props.champions.length > 0) {
      return this.props.champions.map(champion =>
        <ChampionCard
          history={this.props.history}
          champion={champion}
          setChampionId={this.props.setChampionId} />)
    } else {
      return 'No champions here!'
    }
  }

  // generateRows = (array, i) => {
  //   return(
  //     array.slice(i, i+4).map(el => el)
  //   )
  // }

  // generatePlaceholderRows = (array, numberOfRows) => {
  //   const rows = []
  //   for (let i = 0; i < numberOfRows; i++) {
  //     rows.push(this.generateRows(array, i*4))
  //   }
  //   return rows
  // }

  render() {
    return(
      <div id="champions-card-container">
          <Card.Group
          //  itemsPerRow={4}
           >
            {/* {this.props.champions.length > 0
              ? this.props.champions.map(champion =>
                <ChampionCard
                  history={this.props.history}
                  champion={champion}
                  setChampionId={this.props.setChampionId} />)
              : this.displayWithNoChampions()} */}
            {this.renderChampions()}
          </Card.Group>
      </div>
    )
  }
}

export default ChampionsCardContainer