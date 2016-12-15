export default function NatureReducer(state = {
  natures: null
}, action)
{
  switch(action.type) {
    case "NATURES_FULFILLED": {
      return Object.assign({}, state, {natures: action.payload});
      break;
    }
    default: {
      return state;
      break
    }
  }
}
