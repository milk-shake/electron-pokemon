import TrainerPokemon from "../models/trainerPokemon.model";

export function getPokemonForTrainerId(id) {

  return function(dispatch) {
    TrainerPokemon.where('trainer_id', '=', id)
    .with('abilities', {with: ['abilities']})
    .with('characteristics', {with: ['characteristics']})
    .with('natures', {with: ['natures']})
    .with('species', {with: ['species']})
    .with('moves', {with: ['moves']})
    .get()
    .then(function(results) {
      console.log('stubbed');
      // dispatch({type: "PARTYPOKEMON_FULFILLED", payload: results});
    });
  }

}

export function getPartyPokemonForTrainerId(id) {
  return function(dispatch) {
    TrainerPokemon.where('trainer_id', '=', id)
    .andWhere('box_id', '=', 18)
    .with('species', {with: ['species']})
    .get()
    .then(function(results) {
      console.log(results);
      dispatch({type: "PARTYPOKEMON_FULFILLED", payload: results});
    });
  }

}