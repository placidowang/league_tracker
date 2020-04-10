import React from 'react'

const ChampionCard = (props) => {
  return(
    <div style={{fontSize: '13px'}}>
      {props.champion.name}
    </div>
  )
}

export default ChampionCard