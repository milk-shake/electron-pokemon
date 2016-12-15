export default function AbilityReducer(state = {
  abilities: null
}, action)
{
  switch(action.type) {
    case "POKEMONABILTIES_FULFILLED": {
      return Object.assign({}, state, {abilities: action.payload});
      break;
    }
    default: {
      return state;
      break
    }
  }
}
