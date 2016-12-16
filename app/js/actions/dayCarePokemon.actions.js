import TrainerPokemon from "../models/trainerPokemon.model";

export function getDayCarePokemon() {
  return function(dispatch, getState) {
      const trainer = getState().TrainerReducer.trainer;
      TrainerPokemon.where('trainer_id', '=', trainer.id)
      .andWhere('box_id', '=', 19)
      .with('species', (species) => {
        species.with('types', (speciesType) => {
          speciesType.with('types', (type) => {
            type.with('names', (name) => {
                name.andWhere('local_language_id', '=', trainer.language_id);
            });
          });
        })
        .with('names', (names) => {
          names.andWhere('local_language_id', "=", trainer.local_language_id);
        });
      })
      .asAttributes()
      .get()
      .then((results) => {
          dispatch({type: "DAYCAREPOKEMON_FULFILLED", payload: results});
      });
  }

}
