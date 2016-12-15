import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

import * as PartyPokemonActions from "../actions/partyPokemon.actions";
import * as BoxPokemonActions from "../actions/boxPokemon.actions";
import * as spotLightActions from "../actions/spotLight.actions";

import Trainer from "./dashboard/trainer.subcomponent";
import PartyPokemon from "./dashboard/party-pokemon.subcomponent";
import Boxes from "./dashboard/boxes.subcomponent";
import PokemonSpotlight from "./dashboard/pokemon-spotlight.subcomponent";


@connect((store) => {
  return {
    partyPokemon: store.PartyPokemonReducer.pokemon,
    boxPokemon: store.BoxPokemonReducer,
    pokemonSpotlight: store.SpotLightReducer.pokemon
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

  componentDidMount() {
    this.props.dispatch(PartyPokemonActions.getPartyPokemon());
    this.props.dispatch(BoxPokemonActions.getBoxPokemonForBoxId(1));
  }

  render() {
    return <div className="dashboard">
      <Trainer
        trainer={this.props.trainer}
      />
      <div className="dashboard__widgets">
        <PartyPokemon
          pokemon={this.props.partyPokemon}
          handleAddToSpotLight={this.handleAddToSpotLight.bind(this)}
        />
        <PokemonSpotlight
          pokemon={this.props.pokemonSpotlight}
          handleRemoveFromSpotLight={this.handleRemoveFromSpotLight.bind(this)}
        />
      </div>
      <Boxes
        boxes={this.props.boxPokemon}
        handleAddToSpotLight={this.handleAddToSpotLight.bind(this)}
      />
    </div>
  }
}
