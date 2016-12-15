export default function PartyPokemonReducer(state = {
  pokemon: []
}, action)
{
  switch(action.type) {
    case "PARTYPOKEMON_FULFILLED": {
      return Object.assign({}, state, {pokemon: action.payload});
      break;
    }
    default: {
      return state;
      break
    }
  }
}
