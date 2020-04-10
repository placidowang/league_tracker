import React from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'

const ChampionCard = (props) => {
  return(
    <Grid.Column>
      {/* <Card> */}
      <Image src={props.champion.icon_image} />
      {`${props.champion.name}, ${props.champion.title}`}
      {/* </Card> */}
    </Grid.Column>
  )
}

export default ChampionCard