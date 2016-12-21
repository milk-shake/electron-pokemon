export default function TrainerPokemonReducer(state = {
  pokemon: []
}, action)
{
  switch(action.type) {
    case "TRAINERPOKEMON_FULFILLED": {
      return Object.assign({}, state, {pokemon: action.payload});
      break;
    }
    default: {
      return state;
      break
    }
  }
}
