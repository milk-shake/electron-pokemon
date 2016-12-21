import TrainerPokemon from "../models/trainerPokemon.model";
export function getAll() {
  return (dispatch, getState) => {
    const trainer = getState().TrainerReducer.trainer;
    TrainerPokemon.where('trainer_id', '=', trainer.id)
    .with('species', (species) => {
      species
      .with('types', (speciesType) => {
        speciesType.with('types', (type) => {
          type.with('names', (name) => {
            name.andWhere('local_language_id', '=', trainer.language_id);
          });
        });
      })
      .with('names', (name) => {
        name.andWhere('local_language_id', '=', trainer.language_id);
      });
    })
    .with('natures', (nature) => {
      nature.with('names', (name) => {
        name.andWhere('local_language_id', '=', trainer.language_id);
      });
    })
    .with('characteristics', (characteristic) => {
      characteristic
      .with('text', (text) => {
        text.andWhere('local_language_id', '=', trainer.language_id);
      });
    })
    .with('abilities', (ability) => {
      ability.with('names', (ability) => {
        ability.andWhere('local_language_id', '=', trainer.language_id);
      });
    })
    .get()
    .then((results) => {
      dispatch({type: "TRAINERPOKEMON_FULFILLED", payload: results});
    });
  }
}
