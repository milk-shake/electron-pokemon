import TrainerPokemon from "../models/trainerPokemon.model";

export function getBoxPokemonForBoxId(boxId) {
  return function(dispatch, getState) {
    if(boxId) {
      const trainer = getState().TrainerReducer.trainer;
      TrainerPokemon.where('trainer_id', '=', trainer.id)
      .andWhere('box_id', '=', boxId)
      .with('species')
      .asAttributes()
      .get()
      .then((results) => {
        dispatch({type: "BOXPOKEMON_FULFILLED", payload: {boxId: boxId, pokemon: results}});
      });
    }

  }
}
