import { routerReducer } from 'react-router-redux';
import { combineReducers } from "redux";
import TrainerReducer from "./trainer.reducer";
import BoxPokemonReducer from "./boxPokemon.reducer";
import SpotLightReducer from "./pokemonSpotlight.reducer";
import DayCarePokemonReducer from "./dayCarePokemon.reducer";
import NatureReducer from "./nature.reducer";
import AbilityReducer from "./ability.reducer";
import CharacteristicReducer from "./characteristic.reducer";
import MoveReducer from "./move.reducer";
import ModalReducer from "./modal.reducer";

import TrainerPokemonReducer from "./trainerPokemon.reducer";


export default combineReducers({
  TrainerReducer,
  BoxPokemonReducer,
  SpotLightReducer,
  DayCarePokemonReducer,
  NatureReducer,
  AbilityReducer,
  CharacteristicReducer,
  MoveReducer,
  ModalReducer,
  TrainerPokemonReducer,
  routing: routerReducer
});
