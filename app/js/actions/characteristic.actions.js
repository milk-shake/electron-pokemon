import Characteristic from "../models/characteristic.model";

export function getAllCharacteristics() {
  return function(dispatch, getState) {
    const trainer = getState().TrainerReducer.trainer;
    Characteristic.where('id', '>', 0)
    .with('text', (text) => {
      text.andWhere('local_language_id', '=', trainer.language_id);
    })
    .asAttributes()
    .get()
    .then(function(results) {
      dispatch({type: "CHARACTERISTICS_FULFILLED", payload: results});
    });
  }

}
