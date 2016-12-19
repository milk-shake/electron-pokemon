export default function PokemonReducer(state = {

}, action)
{
  switch(action.type) {
    case "POKEMON_ABILITY_UPDATE": {
      console.log(action.payload);
      return Object.assign({}, state, {type: action.payload.type, props: action.payload.props});
    }
    default: {
      return state;
      break
    }
  }
}
