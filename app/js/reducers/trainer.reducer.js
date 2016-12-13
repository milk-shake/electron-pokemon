export default function TrainerReducer(state = {
  trainer: {
    name: null,
    id: null,
    genderId: null
  }
}, action)
{
  switch(action.type) {
    case "TRAINER_FULFILLED": {
      let trainerData = Object.assign({}, state.trainer);
      trainerData = action.payload;
      return Object.assign({}, state, {trainer: trainerData});
      break;
    }
    default: {
      return state;
      break
    }
  }
}
