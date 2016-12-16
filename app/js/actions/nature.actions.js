import Nature from "../models/nature.model";

export function getAllNatures() {
  return function(dispatch, getState) {
    const trainer = getState().TrainerReducer.trainer;
    Nature.where('id', '>', 0)
    .with('names', (name) => {
      name.andWhere('local_language_id', '=', trainer.language_id);
    })
    .asAttributes()
    .get()
    .then(function(results) {
      dispatch({type: "NATURES_FULFILLED", payload: results});
    });
  }

}
