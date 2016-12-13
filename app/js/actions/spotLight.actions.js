import TrainerPokemon from "../models/trainerPokemon.model";
export function addToSpotlight(pokemon) {
  return function(dispatch) {
    TrainerPokemon.where('id', '=', pokemon.attributes.id)
    .withChildren('trainerPokemonMoves', function(trainerPokemonMove) {
      console.log(trainerPokemonMove);
      trainerPokemonMove.with('moves', function(move) {
        move.with('names');
      });
    }
    )
    .with('species', {with: ['species']})
    .get()
    .then(function(results) {
      if(results.length) {
        dispatch({type: "POKEMONSPOTLIGHT_ADDED", payload: results[0]});
      }
    });
  }
}

export function removeFromSpotlight(pokemon) {
  return function(dispatch) {
    dispatch({type: "POKEMONSPOTLIGHT_REMOVED", payload: pokemon});
  }
}
