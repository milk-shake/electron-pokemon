export default function trainerPokemonReducer(state = {
  pokemon:[],
  box: null,
  gender: null,
  species: null,
  types: null,
  nature: null,
  characteristic: null,
  ability: null,
  stats: null,
  moves: null,
  loading: false,
  loaded: false
}, action)
{

  switch(action.type) {
    case "FETCH_TRAINERPOKEMON_FULFILLED": {
      return Object.assign({}, state, {loaded: true, loading: false}, action.payload);
      break;
    }
    case "FETCH_SINGLE_TRAINERPOKEMON_FULFILLED": {
      let pokemon = state.pokemon.concat(action.payload);
      return Object.assign({}, state, {loaded: true, loading: false, pokemon: pokemon});
      break;
    }
    case "FETCH_BOX_FOR_TRAINERPOKEMON_FULFILLED": {
      return Object.assign({}, state, {box: action.payload});
      break;
    }
    case "FETCH_GENDER_FOR_TRAINERPOKEMON_FULFILLED": {
      return Object.assign({}, state, {gender: action.payload});
      break;
    }
    case "FETCH_SPECIES_FOR_TRAINERPOKEMON_FULFILLED": {
      return Object.assign({}, state, {species: action.payload});
      break;
    }
    case "FETCH_TYPES_FOR_TRAINERPOKEMON_FULFILLED": {
      return Object.assign({}, state, {types: action.payload});
      break;
    }
    case "FETCH_NATURE_FOR_TRAINERPOKEMON_FULFILLED": {
      return Object.assign({}, state, {nature: action.payload});
      break;
    }
    case "FETCH_CHARACTERISTIC_FOR_TRAINERPOKEMON_FULFILLED": {
      return Object.assign({}, state, {characteristic: action.payload});
      break;
    }
    case "FETCH_ABILITY_FOR_TRAINERPOKEMON_FULFILLED": {
      return Object.assign({}, state, {ability: action.payload});
      break;
    }
    case "FETCH_ATTACKSTAT_FOR_TRAINERPOKEMON_FULFILLED": {
      let stats = Object.assign({}, state.stats);
      stats.attack = action.payload;
      return Object.assign({}, state, {stats: stats});
      break;
    }
    case "FETCH_DEFENCESTAT_FOR_TRAINERPOKEMON_FULFILLED": {
      let stats = Object.assign({}, state.stats);
      stats.defence = action.payload;
      return Object.assign({}, state, {stats: stats});
      break;
    }
    case "FETCH_SPATTACKSTAT_FOR_TRAINERPOKEMON_FULFILLED": {
      let stats = Object.assign({}, state.stats);
      stats.spAttack = action.payload;
      return Object.assign({}, state, {stats: stats});
      break;
    }
    case "FETCH_SPDEFENCESTAT_FOR_TRAINERPOKEMON_FULFILLED": {
      let stats = Object.assign({}, state.stats);
      stats.spDefence = action.payload;
      return Object.assign({}, state, {stats: stats});
      break;
    }
    case "FETCH_SPEED_FOR_TRAINERPOKEMON_FULFILLED": {
      let stats = Object.assign({}, state.stats);
      stats.speed = action.payload;
      return Object.assign({}, state, {stats: stats});
      break;
    }
    case "FETCH_EVASION_FOR_TRAINERPOKEMON_FULFILLED": {
      let stats = Object.assign({}, state.stats);
      stats.evasion = action.payload;
      return Object.assign({}, state, {stats: stats});
      break;
    }
    case "FETCH_MOVE1_FOR_TRAINERPOKEMON_FULFILLED": {
      let moves = Object.assign({}, state.moves);
      moves.move1 = action.payload;
      return Object.assign({}, state, {moves: moves});
      break;
    }
    case "FETCH_MOVE2_FOR_TRAINERPOKEMON_FULFILLED": {
      let moves = Object.assign({}, state.moves);
      moves.move2 = action.payload;
      return Object.assign({}, state, {moves: moves});
      break;
    }
    case "FETCH_MOVE3_FOR_TRAINERPOKEMON_FULFILLED": {
      let moves = Object.assign({}, state.moves);
      moves.move3 = action.payload;
      return Object.assign({}, state, {moves: moves});
      break;
    }
    case "FETCH_MOVE4_FOR_TRAINERPOKEMON_FULFILLED": {
      let moves = Object.assign({}, state.moves);
      moves.move4 = action.payload;
      return Object.assign({}, state, {moves: moves});
      break;
    }
    default: {
      return state;
      break
    }
  }
}
