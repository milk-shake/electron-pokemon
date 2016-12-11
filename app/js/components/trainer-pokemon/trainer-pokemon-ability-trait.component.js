import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

@connect((store) => {
  return {
    ability: store.trainerPokemonReducer.ability
  }
})
export default class AbilityTraitComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  renderAbility() {
    if(this.props.ability) {
      return <div className="trainer-pokemon-traits__ability">
        <span className="trainer-pokemon-traits__ability-name">Ability </span><span className="trainer-pokemon-traits__ability-value">{this.props.ability.name}</span>
      </div>
    }
    return null;
  }

  render() {
    return this.renderAbility()
  }
}
