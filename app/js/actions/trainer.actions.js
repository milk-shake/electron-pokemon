import TrainerController from "../controllers/trainer.controller";

export function getTrainerById(id) {

  return function(dispatch) {
    TrainerController.getById(id)
    .then(function(trainer) {
      dispatch({type: "TRAINER_FULFILLED", payload: trainer});
    });
  }

}
