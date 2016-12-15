export default function MoveReducer(state = {
  moves: null
}, action)
{
  switch(action.type) {
    case "POKEMONMOVES_FULFILLED": {
      return Object.assign({}, state, {moves: action.payload});
      break;
    }
    default: {
      return state;
      break
    }
  }
}
