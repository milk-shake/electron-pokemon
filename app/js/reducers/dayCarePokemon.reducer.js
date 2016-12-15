export default function DayCarePokemonReducer(state = {
  pokemon: []
}, action)
{
  switch(action.type) {
    case "DAYCAREPOKEMON_FULFILLED": {
      return Object.assign({}, state, {pokemon: action.payload});
      break;
    }
    default: {
      return state;
      break
    }
  }
}
