import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {getAttackStatForPokemon, getDefenceStatForPokemon, getSpAttackForPokemon, getSpDefenceForPokemon, getSpeedForPokemon, getEvasionForPokemon} from "../../actions/trainerPokemonActions";

@connect((store) => {
  return {
    pokemon: store.trainerPokemonReducer.pokemon[0],
    stats: store.trainerPokemonReducer.stats,
    nature: store.trainerPokemonReducer.nature,
    characteristic: store.trainerPokemonReducer.characteristic
  }
})
export default class StatsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getAttackStatForPokemon(this.props.pokemon.attack));
    this.props.dispatch(getDefenceStatForPokemon(this.props.pokemon.defence));
    this.props.dispatch(getSpAttackForPokemon(this.props.pokemon.spAttack));
    this.props.dispatch(getSpDefenceForPokemon(this.props.pokemon.spDefence));
    this.props.dispatch(getSpeedForPokemon(this.props.pokemon.speed));
    this.props.dispatch(getEvasionForPokemon(this.props.pokemon.evasion));
  }

  renderIncreasedByNature(stat) {
    if(this.props.nature && this.props.stats) {
      if(this.props.nature.increasedStatId === this.props.stats[stat].id) {
        return <span className="trainer-pokemon-stats__stat-nature trainer-pokemon-stats__stat-nature--increased"><span className="ion ion-arrow-up-b"></span></span>
      }
    }
  }

  renderDecreasedByNature(stat) {
    if(this.props.nature && this.props.stats) {
      if(this.props.nature.decreasedStatId === this.props.stats[stat].id) {
        return <span className="trainer-pokemon-stats__stat-nature trainer-pokemon-stats__stat-nature--decreased"><span className="ion ion-arrow-down-b"></span></span>
      }
    }
  }

  renderHighestIV(stat) {
    if(this.props.characteristic && this.props.stats) {
      if(this.props.characteristic.statId === this.props.stats[stat].id) {
        return <span className="trainer-pokemon-stats__stat-characteristic"><span className="ion ion-flame"></span></span>
      }
    }
  }

  renderAttackStat() {
    if(this.props.stats && this.props.stats.attack) {
      return <div className="trainer-pokemon-stats__stat">
        {this.renderHighestIV('attack')}
        <span className="trainer-pokemon-stats__stat-name">{this.props.stats.attack.name}</span>
        <span className="trainer-pokemon-stats__stat-value">{this.props.stats.attack.value}</span>
        {this.renderIncreasedByNature('attack')}
        {this.renderDecreasedByNature('attack')}
      </div>
    }
    return null;
  }

  renderDefenceStat() {
    if(this.props.stats && this.props.stats.defence) {
      return <div className="trainer-pokemon-stats__stat">
        {this.renderHighestIV('defence')}
        <span className="trainer-pokemon-stats__stat-name">{this.props.stats.defence.name}</span>
        <span className="trainer-pokemon-stats__stat-value">{this.props.stats.defence.value}</span>
        {this.renderIncreasedByNature('defence')}
        {this.renderDecreasedByNature('defence')}
      </div>
    }
    return null;
  }

  renderSpecialAttackStat() {
    if(this.props.stats && this.props.stats.spAttack) {
      return <div className="trainer-pokemon-stats__stat">
        {this.renderHighestIV('spAttack')}
        <span className="trainer-pokemon-stats__stat-name">{this.props.stats.spAttack.name}</span>
        <span className="trainer-pokemon-stats__stat-value">{this.props.stats.spAttack.value}</span>
        {this.renderIncreasedByNature('spAttack')}
        {this.renderDecreasedByNature('spAttack')}
      </div>
    }
    return null;
  }

  renderSpecialDefenceStat() {
    if(this.props.stats && this.props.stats.spDefence) {
      return <div className="trainer-pokemon-stats__stat">
        {this.renderHighestIV('spDefence')}
        <span className="trainer-pokemon-stats__stat-name">{this.props.stats.spDefence.name}</span>
        <span className="trainer-pokemon-stats__stat-value">{this.props.stats.spDefence.value}</span>
        {this.renderIncreasedByNature('spDefence')}
        {this.renderDecreasedByNature('spDefence')}
      </div>
    }
    return null;
  }

  renderSpeedStat() {
    if(this.props.stats && this.props.stats.speed) {
      return <div className="trainer-pokemon-stats__stat">
        {this.renderHighestIV('speed')}
        <span className="trainer-pokemon-stats__stat-name">{this.props.stats.speed.name}</span>
        <span className="trainer-pokemon-stats__stat-value">{this.props.stats.speed.value}</span>
        {this.renderIncreasedByNature('speed')}
        {this.renderDecreasedByNature('speed')}
      </div>
    }
    return null;
  }

  renderEvasionStat() {
    if(this.props.stats && this.props.stats.evasion) {
      return <div className="trainer-pokemon-stats__stat">
        <span className="trainer-pokemon-stats__stat-name">{this.props.stats.evasion.name}</span>
        <span className="trainer-pokemon-stats__stat-value">{this.props.stats.evasion.value}</span>
      </div>
    }
    return null;
  }

  render() {
      return <div className="trainer-pokemon-stats__wrapper">
        <div className="trainer-pokemon-stats">
          {this.renderAttackStat()}
          {this.renderDefenceStat()}
          {this.renderSpecialAttackStat()}
          {this.renderSpecialDefenceStat()}
          {this.renderSpeedStat()}
          {this.renderEvasionStat()}

        </div>
      </div>
  }
}
