import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

import * as BoxPokemonActions from "../actions/boxPokemon.actions";
import * as spotLightActions from "../actions/spotLight.actions";
import * as dayCarePokemonActions from "../actions/dayCarePokemon.actions";
import * as natureActions from "../actions/nature.actions";
import * as PokemonAbilityActions from "../actions/pokemonAbility.actions";
import * as CharacteristicActions from "../actions/characteristic.actions";
import * as ModalActions from "../actions/modal.actions";
import * as TrainerPokemonActions from "../actions/trainerPokemon.actions";

import Trainer from "./dashboard/trainer.subcomponent";
import PartyPokemon from "./dashboard/party-pokemon.subcomponent";
import Boxes from "./dashboard/boxes.subcomponent";
import PokemonSpotlight from "./dashboard/pokemon-spotlight.subcomponent";
import DayCarePokemon from "./dashboard/day-care-pokemon.subcomponent";
import WorkBenchPokemon from "./dashboard/work-bench-pokemon.subcomponent";


@connect((store) => {
  return {
    boxPokemon: store.BoxPokemonReducer,
    pokemonSpotlight: store.SpotLightReducer.pokemon,
    dayCarePokemon: store.DayCarePokemonReducer.pokemon,
    natures: store.NatureReducer.natures,
    abilities: store.AbilityReducer,
    characteristics: store.CharacteristicReducer.characteristics,
    trainerPokemon: store.TrainerPokemonReducer.pokemon
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

  updatePokemonNickname(pokemon, name) {
    this.props.dispatch(spotLightActions.updatePokemonNickname(pokemon, name));
  }

  showModal(options) {
    this.props.dispatch(ModalActions.showModal(options));
  }

  componentDidMount() {
    // this.props.dispatch(BoxPokemonActions.getBoxPokemonForBoxId(1));
    // this.props.dispatch(dayCarePokemonActions.getDayCarePokemon());
    this.props.dispatch(TrainerPokemonActions.getAll());
  }

  minimize(name) {
    ReactDOM.findDOMNode(this.refs[name]).classList.toggle('minimized');
  }

  getPartyPokemon() {
    if(this.props.trainerPokemon.length) {
      return this.props.trainerPokemon.map((pokemon) => {
        if(pokemon.attributes.box_id == 18) {
          return pokemon;
        }
      });
    }
  }

  render() {
    return <div className="dashboard">
      <Trainer
        trainer={this.props.trainer}
      />
      <div className="dashboard__widgets">
        <div ref="left-bar" className="dashboard__left-bar">
          <PartyPokemon
            pokemon={this.getPartyPokemon()}
            handleAddToSpotLight={this.handleAddToSpotLight.bind(this)}
            minimize={this.minimize.bind(this)}
          />
          <DayCarePokemon
            pokemon={this.props.dayCarePokemon}
            handleAddToSpotLight={this.handleAddToSpotLight.bind(this)}
          />
        </div>
        <div ref="spotlight" className="dashboard__spotlight">
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
            minimize={this.minimize.bind(this)}
            updateNickname={this.updatePokemonNickname.bind(this)}
          />
        </div>
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
