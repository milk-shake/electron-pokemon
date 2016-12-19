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
    case "POKEMONSPOTLIGHT_ABILITY_UPDATE": {
      let pokemon = action.payload.pokemon;
      let trait = action.payload.trait;
      let name = action.payload.name;
      let newTrait = {};
      newTrait[name] = trait;

      let newPokemon = Object.assign({}, pokemon, newTrait);
      let newState = state.pokemon.slice(0, state.pokemon.indexOf(pokemon)).concat([newPokemon], state.pokemon.slice(state.pokemon.indexOf(pokemon) + 1));
      return Object.assign({}, state, {pokemon: newState});
      break;
    }
    case "POKEMONSPOTLIGHT_NATURE_UPDATE": {
      let pokemon = action.payload.pokemon;
      let nature = action.payload.nature;
      let newPokemon = Object.assign({}, pokemon, {natures: [nature]});
      let newState = state.pokemon.slice(0, state.pokemon.indexOf(pokemon)).concat([newPokemon], state.pokemon.slice(state.pokemon.indexOf(pokemon) + 1));
      return Object.assign({}, state, {pokemon: newState});
      break;
    }
    case "POKEMONSPOTLIGHT_CHARACTERISTIC_UPDATE": {
      let pokemon = action.payload.pokemon;
      let characteristic = action.payload.characteristic;
      let newPokemon = Object.assign({}, pokemon, {characteristics: [characteristic]});
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
