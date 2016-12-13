export default function PokemonSpotlightReducer(state = {
  pokemon: []
}, action)
{
  switch(action.type) {
    case "POKEMONSPOTLIGHT_ADDED": {
      if(state.pokemon.indexOf(action.payload) == -1) {
        let newState = state.pokemon.concat(action.payload);
        return Object.assign({}, state, {pokemon: newState});
      }
      else {
        return state;
      }
      break;
    }
    case "POKEMONSPOTLIGHT_REMOVED": {
      if(state.pokemon.indexOf(action.payload) > -1) {
        let newState = state.pokemon.slice(0, state.pokemon.indexOf(action.payload)).concat(state.pokemon.slice(state.pokemon.indexOf(action.payload) + 1));
        return Object.assign({}, state, {pokemon: newState});
      }
      return state;
    }
    default: {
      return state;
      break
    }
  }
}