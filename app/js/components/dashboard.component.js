import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

import * as PartyPokemonActions from "../actions/partyPokemon.actions";
import * as BoxPokemonActions from "../actions/boxPokemon.actions";
import * as spotLightActions from "../actions/spotLight.actions";
import * as dayCarePokemonActions from "../actions/dayCarePokemon.actions";
import * as natureActions from "../actions/nature.actions";
import * as PokemonAbilityActions from "../actions/pokemonAbility.actions";
import * as CharacteristicActions from "../actions/characteristic.actions";
import * as ModalActions from "../actions/modal.actions";

import Trainer from "./dashboard/trainer.subcomponent";
import PartyPokemon from "./dashboard/party-pokemon.subcomponent";
import Boxes from "./dashboard/boxes.subcomponent";
import PokemonSpotlight from "./dashboard/pokemon-spotlight.subcomponent";
import DayCarePokemon from "./dashboard/day-care-pokemon.subcomponent";
import WorkBenchPokemon from "./dashboard/work-bench-pokemon.subcomponent";


@connect((store) => {
  return {
    partyPokemon: store.PartyPokemonReducer.pokemon,
    boxPokemon: store.BoxPokemonReducer,
    pokemonSpotlight: store.SpotLightReducer.pokemon,
    dayCarePokemon: store.DayCarePokemonReducer.pokemon,
    natures: store.NatureReducer.natures,
    abilities: store.AbilityReducer.abilities,
    characteristics: store.CharacteristicReducer.characteristics
  }
})
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAddToSpotLight(pokemon) {
    this.props.dispatch(spotLightActions.addToSpotlight(pokemon));
  }

  handleRemoveFromSpotLight(pokemon) {
    this.props.dispatch(spotLightActions.removeFromSpotlight(pokemon));
  }

  getAllNatures() {
    this.props.dispatch(natureActions.getAllNatures());
  }

  getAllAbilities(id) {
    this.props.dispatch(PokemonAbilityActions.getAllAbilitiesForPokemonId(id));
  }

  getAllCharacteristics() {
    this.props.dispatch(CharacteristicActions.getAllCharacteristics());
  }

  updatePokemonTrait(name, pokemon, trait) {
    this.props.dispatch(spotLightActions.updatePokemonTrait(name, pokemon, trait));
  }

  showModal(options) {
    this.props.dispatch(ModalActions.showModal(options));
  }

  componentDidMount() {
    this.props.dispatch(PartyPokemonActions.getPartyPokemon());
    this.props.dispatch(BoxPokemonActions.getBoxPokemonForBoxId(1));
    this.props.dispatch(dayCarePokemonActions.getDayCarePokemon());
  }

  render() {
    return <div className="dashboard">
      <Trainer
        trainer={this.props.trainer}
      />
      <div className="dashboard__widgets">
        <div className="dashboard__left-bar">
          <PartyPokemon
            pokemon={this.props.partyPokemon}
            handleAddToSpotLight={this.handleAddToSpotLight.bind(this)}
          />
          <DayCarePokemon
            pokemon={this.props.dayCarePokemon}
            handleAddToSpotLight={this.handleAddToSpotLight.bind(this)}
          />
        </div>
        <PokemonSpotlight
          pokemon={this.props.pokemonSpotlight}
          handleRemoveFromSpotLight={this.handleRemoveFromSpotLight.bind(this)}
          getAllNatures={this.getAllNatures.bind(this)}
          natures={this.props.natures}
          getAllAbilities={this.getAllAbilities.bind(this)}
          abilities={this.props.abilities}
          getAllCharacteristics={this.getAllCharacteristics.bind(this)}
          characteristics={this.props.characteristics}
          updateTrait={this.updatePokemonTrait.bind(this)}
          showModal={this.showModal.bind(this)}
        />
        <div className="dashboard__right-bar">
          <WorkBenchPokemon />
        </div>
      </div>
      <Boxes
        boxes={this.props.boxPokemon}
        handleAddToSpotLight={this.handleAddToSpotLight.bind(this)}
      />
    </div>
  }
}
