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
      break;
    }
    case "POKEMONSPOTLIGHT_TRAIT_UPDATE": {
      let pokemon = action.payload.pokemon;
      let trait = action.payload.trait;
      let name = action.payload.name;
      let newTrait = {};
      newTrait[name] = [trait];

      let newPokemon = Object.assign({}, pokemon, newTrait);
      let newState = state.pokemon.slice(0, state.pokemon.indexOf(pokemon)).concat([newPokemon], state.pokemon.slice(state.pokemon.indexOf(pokemon) + 1));
      return Object.assign({}, state, {pokemon: newState});
      break;
    }
    case "POKEMONSPOTLIGHT_NICKNAME_UPDATE": {
      let pokemon = action.payload.pokemon;
      let name = action.payload.name;

      let newPokemon = Object.assign({}, pokemon, {nick_name: name});
      let newState = state.pokemon.slice(0, state.pokemon.indexOf(pokemon)).concat([newPokemon], state.pokemon.slice(state.pokemon.indexOf(pokemon) + 1));
      return Object.assign({}, state, {pokemon: newState});
      break;
    }
    default: {
      return state;
      break
    }
  }
}
