import PokemonMove from "../models/pokemonMove.model";

export function getAllMovesForPokemonId(id) {
  return function(dispatch, getState) {
    const trainer = getState().TrainerReducer.trainer;
    PokemonMove.where('pokemon_id', '=', id)
    .with('moves', (move) => {
      move.with('names', (name) => {
        name.andWhere('language_id', '=', trainer.language_id);
      })
      .with('types');
    })
    .asAttributes()
    .get()
    .then(function(results) {
      dispatch({type: "POKEMONMOVES_FULFILLED", payload: results});
    });
  }

}
