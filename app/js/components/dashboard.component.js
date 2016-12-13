import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

import * as TrainerActions from "../actions/trainer.actions";
import * as TrainerPokemonActions from "../actions/trainerPokemon.actions";

import Trainer from "./dashboard/trainer.subcomponent";
import PartyPokemon from "./dashboard/party-pokemon.subcomponent";
import Boxes from "./dashboard/boxes.subcomponent";
import PokemonSpotlight from "./dashboard/pokemon-spotlight.subcomponent";

@connect((store) => {
  return {
    trainer: store.TrainerReducer.trainer,
    trainerPokemon: store.TrainerPokemonReducer.party,
    pokemonSpotlight: store.SpotLightReducer.pokemon
  }
})
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(TrainerActions.getTrainerById(1));
    this.props.dispatch(TrainerPokemonActions.getPartyPokemonForTrainerId(1));
    this.props.dispatch(TrainerPokemonActions.getBoxPokemonForBoxId(1, 1));
  }

  render() {

    return <div className="dashboard">
      <Trainer />
      <div className="dashboard__widgets">
        <PartyPokemon />
        <PokemonSpotlight />
      </div>
      <Boxes />
    </div>
  }
}
