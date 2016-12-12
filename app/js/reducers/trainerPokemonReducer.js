export default function trainerPokemonReducer(state = {
  party: []
}, action)
{
  switch(action.type) {
    case "PARTYPOKEMON_FULFILLED": {
      let newState = state.party.concat(action.payload);
      return Object.assign({}, state, {party: newState});
      break;
    }
    default: {
      return state;
      break
    }
  }
}
