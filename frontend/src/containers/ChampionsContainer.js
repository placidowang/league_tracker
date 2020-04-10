import React from 'react'
import ChampionCard from '../components/ChampionCard.js' // just to test
import { Grid } from 'semantic-ui-react'

export default class ChampionsContainer extends React.Component {
// const ChampionsContainer = (props) => {
  render() {
    return(
      <Grid columns={4} celled divided> {/* need to slice each row to get vertical dividers */}
          {this.props.champions.length > 0 ?
          this.props.champions.map(champion => <ChampionCard champion={champion} />) : console.log('No Champions!')}

        {/* <Grid.Row>
          {this.props.champions.length > 0 ?
          this.props.champions.slice(4,8).map(champion => <ChampionCard champion={champion} />) : console.log('No Champions!')}
        </Grid.Row> */}
      </Grid>
    )
  }

}

// export default ChampionsContainer