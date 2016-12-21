import React from 'react';
import ReactDOM from 'react-dom';
import { createStore }  from "redux";
import { Provider, connect } from "react-redux";
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from "./store";
import ContextMenu from "./context/menu.click";

import App from "./components/app.component";
import Ability from "./components/ability.component";
import AbilityList from "./components/abilityList.component";
import Box from "./components/box.component";
import BoxList from "./components/boxList.component";
import Characteristic from "./components/characteristic.component";
import CharacteristicList from "./components/characteristicList.component";
import Dashboard from "./components/dashboard.component";
import Item from "./components/item.component";
import ItemList from "./components/itemList.component";
import Nature from "./components/nature.component";
import NatureList from "./components/natureList.component";
import Pokemon from "./components/pokemon.component";
import PokemonList from "./components/pokemonList.component";
import TrainerPokemon from "./components/trainerPokemon.component";
import TrainerPokemonList from "./components/trainerPokemonList.component";
import MoveList from "./components/moveList.component";
import Move from "./components/move.component";


// import {runMigrations} from "./migrations";
// import {runSeeders} from "./seeders";
//
// runMigrations();
// runSeeders();


//TODO have started making a full trainerPokemonReducer. need to make a model method that resolves it's relationships after its been queries (lazy loading). also need to make everything relate to the main list of trainerPokemon.
//TODO 0. fix the modal list showing abilities for the latest pokemon for every pokemon 1: any subcomponent that accesses a nested value should have that value as a prop instead, 2: finish model relationships, 3: carry on with creating pokemon edit functionality (i.e. moves)
const history = syncHistoryWithStore(hashHistory, store)


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/trainerpokemonlist" component={TrainerPokemonList}>
        <Route path="/trainerPokemon/add" component={TrainerPokemon}/>
        <Route path="/trainerPokemon/:id" component={TrainerPokemon}/>
      </Route>
      <Route path="/pokemonlist" component={PokemonList}>
        <Route path="pokemon/:id" component={Pokemon}/>
      </Route>
      <Route path="/itemlist" component={ItemList}>
        <Route path="item/:id" component={Item}/>
      </Route>
      <Route path="/boxlist" component={BoxList}>
        <Route path="box/:id" component={Box}/>
      </Route>
      <Route path="/movelist" component={MoveList}>
        <Route path="move/:id" component={Move}/>
      </Route>
      <Route path="/abilitylist" component={AbilityList}>
        <Route path="ability/:id" component={Ability}/>
      </Route>
      <Route path="/characteristiclist" component={CharacteristicList}>
        <Route path="characteristic/:id" component={Characteristic}/>
      </Route>
      <Route path="/naturelist" component={NatureList}>
        <Route path="nature/:id" component={Nature}/>
      </Route>
    </Route>
  </Router>
  </Provider>,
  document.getElementById('app')
);
