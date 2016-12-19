import PokemonAbility from "../models/pokemonAbility.model";

export function getAllAbilitiesForPokemonId(id) {
  return function(dispatch, getState) {
    const trainer = getState().TrainerReducer.trainer;
    PokemonAbility.where('pokemon_id', '=', id)
    .with('abilities', (ability) => {
      ability.with('flavors', (flavor) => {
        flavor.andWhere('language_id', '=', trainer.language_id);
      })
      .with('names', (name) => {
        name.andWhere('local_language_id', '=', trainer.language_id);
      })
      .with('prose', (prose) => {
        prose.andWhere('local_language_id', '=', trainer.language_id);
      });
    })
    .asAttributes()
    .get()
    .then(function(results) {
      dispatch({type: "POKEMONABILITIES_FULFILLED", payload: results});
    });
  }

}
