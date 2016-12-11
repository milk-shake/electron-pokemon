import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import LevelTraitComponent from "./trainer-pokemon-level-trait.component";
import NatureTraitComponent from "./trainer-pokemon-nature-trait.component";
import CharacteristicTraitComponent from "./trainer-pokemon-characteristic-trait.component";
import AbilityTraitComponent from "./trainer-pokemon-ability-trait.component";

import {getNatureForPokemonById, getCharacteristicForPokemonById, getAbilityForPokemonById} from "../../actions/trainerPokemonActions";


@connect((store) => {
  return {
    pokemon: store.trainerPokemonReducer.pokemon[0],
    nature: store.trainerPokemonReducer.nature,
    ability: store.trainerPokemonReducer.ability
  }
})
export default class TraitsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(getNatureForPokemonById(this.props.pokemon.natureId));
    this.props.dispatch(getCharacteristicForPokemonById(this.props.pokemon.characteristicId));
    this.props.dispatch(getAbilityForPokemonById(this.props.pokemon.abilityId));
  }

  renderLevel() {
    if(this.props.pokemon) {
      return <LevelTraitComponent />
    }
  }

  renderNature() {
    if(this.props.pokemon) {
      return <NatureTraitComponent />
    }
  }
  
  renderCharacteristic() {
    if(this.props.pokemon) {
      return <CharacteristicTraitComponent />
    }
  }

  renderAbility() {
    if(this.props.pokemon) {
      return <AbilityTraitComponent />
    }
  }

  render() {
      return <div className="trainer-pokemon-traits__wrapper">
        <div className="trainer-pokemon-traits">
          {this.renderLevel()}
          {this.renderNature()}
          {this.renderCharacteristic()}
          {this.renderAbility()}
        </div>
      </div>
  }
}
