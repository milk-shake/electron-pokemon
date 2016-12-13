import { routerReducer } from 'react-router-redux';
import { combineReducers } from "redux";
import TrainerReducer from "./trainer.reducer";
import TrainerPokemonReducer from "./trainerPokemon.reducer";
import SpotLightReducer from "./pokemonSpotlight.reducer";


export default combineReducers({
  TrainerReducer,
  TrainerPokemonReducer,
  SpotLightReducer,
  routing: routerReducer
});
