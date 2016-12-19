export default function AbilityReducer(state = {
  abilities: null,
  filtered: null
}, action)
{
  switch(action.type) {
    case "POKEMONABILITIES_FULFILLED": {
      return Object.assign({}, state, {abilities: action.payload});
      break;
    }
    case "POKEMONABILITIES_FILTER": {
      return Object.assign({}, state, {filtered: action.payload});
    }
    default: {
      return state;
      break
    }
  }
}
