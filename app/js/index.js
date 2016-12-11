import React from 'react';
import ReactDOM from 'react-dom';
import { createStore }  from "redux";
import { Provider, connect } from "react-redux";

import TrainerPokemonController from "./controllers/trainerPokemonController";

import store from "./store";
import { fetchOwnedPokemonById } from "./actions/trainerPokemonActions";

import MetaComponent from "./components/trainer-pokemon/trainer-pokemon-meta.component";
import TraitsComponent from "./components/trainer-pokemon/trainer-pokemon-traits.component";
import StatsComponent from "./components/trainer-pokemon/trainer-pokemon-stats.component";
import MovesComponent from "./components/trainer-pokemon/trainer-pokemon-moves.component";
import EvolutionComponent from "./components/trainer-pokemon/trainer-pokemon-evolution.component";

@connect((store) => {
  return {
    pokemon: store.trainerPokemonReducer.pokemon[0],
    loading: store.trainerPokemonReducer.loading,
    loaded: store.trainerPokemonReducer.loaded
  }
})
class TrainerPokemonSingleView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchOwnedPokemonById(1));
  }

  render() {
    if(this.props.pokemon) {
      return <div>
        <MetaComponent />
        <TraitsComponent />
        <StatsComponent />
        <MovesComponent />
        <EvolutionComponent />
      </div>
    }
    return null;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <TrainerPokemonSingleView />
  </Provider>,
  document.getElementById('app')
);


/*
return <div>
  <TraitsComponent
    pokemon={this.state.pokemon}
  />



</div>
*/
