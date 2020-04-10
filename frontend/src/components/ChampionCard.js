import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const ChampionCard = (props) => {
  return(
    <Grid.Column>
      <Image src={props.champion.icon_image} />
      {`${props.champion.name}, ${props.champion.title}`}
    </Grid.Column>
  )
}

export default ChampionCard