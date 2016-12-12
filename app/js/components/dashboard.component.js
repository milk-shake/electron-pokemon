import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

import * as TrainerActions from "../actions/trainer.actions";
import * as TrainerPokemonActions from "../actions/trainerPokemon.actions";

import Trainer from "./dashboard/trainer.subcomponent.js";
import PartyPokemon from "./dashboard/party-pokemon.subcomponent.js";
import Boxes from "./dashboard/boxes.subcomponent.js";

import TrainerPokemon from "../models/trainerPokemon.model";
import TrainerPokemonSpecies from "../models/trainerPokemonSpecies.model";

// let options = {
//   trainer_id: 1,
//   gender_id: 2,
//   nick_name: "funkysoreass",
//   box_id: 18,
// }
//
// let species = {
//   trainer_pokemon_id: 1,
//   species_id: 26
// }
//
// let options2 = {
//   trainer_id: 1,
//   gender_id: 2,
//   nick_name: "gendelwild",
//   box_id: 18,
// }
//
// let species2 = {
//   trainer_pokemon_id: 2,
//   species_id: 560
// }
//
// let options3 = {
//   trainer_id: 1,
//   gender_id: 2,
//   nick_name: "phorax",
//   box_id: 18,
// }
//
// let species3 = {
//   trainer_pokemon_id: 3,
//   species_id: 341
// }
//
// let options4 = {
//   trainer_id: 1,
//   gender_id: 2,
//   nick_name: "genewilder",
//   box_id: 18,
// }
//
// let species4 = {
//   trainer_pokemon_id: 4,
//   species_id: 678
// }
//
// let options5 = {
//   trainer_id: 1,
//   gender_id: 2,
//   nick_name: "spenxy",
//   box_id: 18,
// }
//
// let species5 = {
//   trainer_pokemon_id: 1,
//   species_id: 290
// }
//
// let options6 = {
//   trainer_id: 1,
//   gender_id: 2,
//   nick_name: "grassyass",
//   box_id: 18,
// }
//
// let species6 = {
//   trainer_pokemon_id: 1,
//   species_id: 120
// }
//
// let tp1 = new TrainerPokemon();
// tp1.hydrate(options);
// tp1.save();
//
// let ts1 = new TrainerPokemonSpecies();
// ts1.hydrate(species);
// ts1.save();
//
// let tp2 = new TrainerPokemon();
// tp1.hydrate(options2);
// tp1.save();
//
// let ts2 = new TrainerPokemonSpecies();
// ts2.hydrate(species2);
// ts2.save();
//
// let tp3 = new TrainerPokemon();
// tp1.hydrate(options3);
// tp1.save();
//
// let ts3 = new TrainerPokemonSpecies();
// ts3.hydrate(species3);
// ts3.save();
//
// let tp4 = new TrainerPokemon();
// tp1.hydrate(options4);
// tp1.save();
//
// let ts4 = new TrainerPokemonSpecies();
// ts4.hydrate(species4);
// ts4.save();
//
// let tp5 = new TrainerPokemon();
// tp1.hydrate(options5);
// tp1.save();
//
// let ts5 = new TrainerPokemonSpecies();
// ts1.hydrate(species5);
// ts5.save();
//
// let tp6 = new TrainerPokemon();
// tp1.hydrate(options6);
// tp1.save();
//
// let ts6 = new TrainerPokemonSpecies();
// ts6.hydrate(species6);
// ts6.save();


@connect((store) => {
  return {
    trainer: store.trainerReducer.trainer,
    trainerPokemon: store.trainerPokemonReducer.party
  }
})
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(TrainerActions.getTrainerById(1));
    this.props.dispatch(TrainerPokemonActions.getPartyPokemonForTrainerId(1));
  }

  render() {

    return <div className="dashboard">
      <Trainer />
      <PartyPokemon />
      <Boxes />
    </div>
  }
}
