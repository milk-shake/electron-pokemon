import { routerReducer } from 'react-router-redux';
import { combineReducers } from "redux";
import TrainerReducer from "./trainer.reducer";
import PartyPokemonReducer from "./partyPokemon.reducer";
import BoxPokemonReducer from "./boxPokemon.reducer";
import SpotLightReducer from "./pokemonSpotlight.reducer";


export default combineReducers({
  TrainerReducer,
  PartyPokemonReducer,
  BoxPokemonReducer,
  SpotLightReducer,
  routing: routerReducer
});
