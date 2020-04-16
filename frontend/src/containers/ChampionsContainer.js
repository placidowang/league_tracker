import React from 'react'
import ChampionSearchBar from '../components/ChampionSearchBar.js'
import ChampionsCardContainer from './ChampionsCardContainer.js'

export default class ChampionsContainer extends React.Component {
  render() {
    return(
      <div id='champions-container'>
        <ChampionSearchBar
          searchChampions={this.props.searchChampions}
          championsSearchTerm={this.props.championsSearchTerm}
          championsSortType={this.props.championsSortType}
          championsRoleFilters={this.props.championsRoleFilters}
          championsDifficultyFilter={this.props.championsDifficultyFilter}
          sortChampionsByType={this.props.sortChampionsByType}
          filterChampionsByRole={this.props.filterChampionsByRole}
          filterChampionsByDifficulty={this.props.filterChampionsByDifficulty} />
        <ChampionsCardContainer
          champions={this.props.champions}
          history={this.props.history}
          setChampionId={this.props.setChampionId}
          loadingChampions={this.props.loadingChampions} />
      </div>
    )
  }
}
