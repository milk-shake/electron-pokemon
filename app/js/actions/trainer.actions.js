import Trainer from "../models/trainer.model";

export function getTrainerById(id) {

  return function(dispatch) {
    Trainer.find(id).asAttributes().get()
    .then(function(result) {
      dispatch({type: "TRAINER_FULFILLED", payload: result[0]});
    });
  }

}
