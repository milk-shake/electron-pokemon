export default function BoxPokemonReducer(state = {
  box1: []
}, action)
{
  switch(action.type) {
    case "BOXPOKEMON_FULFILLED": {
      let assign = {};
      assign["box"+action.payload.boxId] = action.payload.pokemon;
      return Object.assign({}, state, assign);
    }
    default: {
      return state;
      break
    }
  }
}
