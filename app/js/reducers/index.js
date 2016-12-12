import { routerReducer } from 'react-router-redux';
import { combineReducers } from "redux";
import trainerReducer from "./trainerReducer";
import trainerPokemonReducer from "./trainerPokemonReducer";


export default combineReducers({
  trainerReducer,
  trainerPokemonReducer,
  routing: routerReducer
});
