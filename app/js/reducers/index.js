import { routerReducer } from 'react-router-redux';
import { combineReducers } from "redux";
import TrainerReducer from "./trainer.reducer";
import PartyPokemonReducer from "./partyPokemon.reducer";
import BoxPokemonReducer from "./boxPokemon.reducer";
import SpotLightReducer from "./pokemonSpotlight.reducer";
import DayCarePokemonReducer from "./dayCarePokemon.reducer";
import NatureReducer from "./nature.reducer";
import AbilityReducer from "./ability.reducer";
import CharacteristicReducer from "./characteristic.reducer";
import MoveReducer from "./move.reducer";


export default combineReducers({
  TrainerReducer,
  PartyPokemonReducer,
  BoxPokemonReducer,
  SpotLightReducer,
  DayCarePokemonReducer,
  NatureReducer,
  AbilityReducer,
  CharacteristicReducer,
  MoveReducer,
  routing: routerReducer
});
