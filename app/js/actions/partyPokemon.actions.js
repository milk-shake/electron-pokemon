import TrainerPokemon from "../models/trainerPokemon.model";

export function getPartyPokemon() {
  return function(dispatch, getState) {
      const trainer = getState().TrainerReducer.trainer;
      TrainerPokemon.where('trainer_id', '=', trainer.id)
      .andWhere('box_id', '=', 18)
      .with('species', (species) => {
        species.with('types', (speciesType) => {
          speciesType.with('types', (type) => {
            type.with('names', (name) => {
                name.andWhere('local_language_id', '=', trainer.language_id);
            });
          });
        });
        species.with('names', (names) => {
          names.andWhere('local_language_id', "=", trainer.language_id);
        });
      })
      .asAttributes()
      .get()
      .then((results) => {
          dispatch({type: "PARTYPOKEMON_FULFILLED", payload: results});
      });
  }

}
