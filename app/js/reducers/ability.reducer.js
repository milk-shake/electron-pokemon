export default function AbilityReducer(state = {
  
}, action)
{
  switch(action.type) {
    case "POKEMONABILITIES_FULFILLED": {
      let o = {};
      o[action.payload.pokemon_id] = action.payload.results;
      return Object.assign({}, state, o);
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
