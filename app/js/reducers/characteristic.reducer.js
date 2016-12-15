export default function CharacteristicReducer(state = {
  characteristics: null
}, action)
{
  switch(action.type) {
    case "CHARACTERISTICS_FULFILLED": {
      return Object.assign({}, state, {characteristics: action.payload});
      break;
    }
    default: {
      return state;
      break
    }
  }
}
