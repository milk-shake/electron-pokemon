import TrainerPokemon from "../models/trainerPokemon.model";

export function getPartyPokemon() {
  return function(dispatch, getState) {
      const trainer = getState().TrainerReducer.trainer;
      TrainerPokemon.where('trainer_id', '=', trainer.id)
      .andWhere('box_id', '=', 18)
      .with('species', function(q) {
        q.with('species', function(q) {
          q.with('types', function(q) {
            q.with('types', function(q) {
              q.with('names', function(q) {
                q.andWhere('local_language_id', '=', trainer.local_language_id);
              });
            })
          });
          q.with('names', function(q) {
            q.andWhere('local_language_id', "=", trainer.local_language_id);
          });
        });
      })
      .asAttributes()
      .get()
      .then(function(results) {
          dispatch({type: "PARTYPOKEMON_FULFILLED", payload: results});
      });
  }

}
