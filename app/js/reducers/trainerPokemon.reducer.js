export default function TrainerPokemonReducer(state = {
  party: [],
  box1: [],
}, action)
{
  switch(action.type) {
    case "PARTYPOKEMON_FULFILLED": {
      let newState = state.party.concat(action.payload);
      return Object.assign({}, state, {party: newState});
      break;
    }
    case "BOXPOKEMON_FULFILLED": {
      let newState = state["box"+action.payload.boxId].concat(action.payload.pokemon);
      let assign = {};
      assign["box"+action.payload.boxId] = newState;
      return Object.assign({}, state, assign);
    }
    default: {
      return state;
      break
    }
  }
}
