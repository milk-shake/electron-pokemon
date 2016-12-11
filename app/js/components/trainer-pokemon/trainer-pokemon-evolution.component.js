import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import PokemonController from "../../controllers/pokemonController";
import SpriteComponent from "./trainer-pokemon-sprite.component";

@connect((store) => {
  return {
    species: store.trainerPokemonReducer.species
  }
})
export default class EvolutionComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  getNextEvolution() {
    if(this.props.nextEvolution) {
      return <div className="trainer-pokemon-evolution trainer-pokemon-evolution--next">
        <h1 className="trainer-pokemon-evolution__name trainer-pokemon-evolution__name--next">{this.props.nextEvolution.species.name}</h1>
        <div className="trainer-pokemon-evolution__sprite trainer-pokemon-evolution__sprite--next">
          <SpriteComponent
            gender={this.props.gender}
            sprites={this.props.nextEvolution.sprite}
            shiny={this.props.shiny}
          />
        </div>
      </div>;
    }
    else {
      return null;
    }
  }

  getPrevEvolution() {
    if(this.props.prevEvolution) {
      return <div className="trainer-pokemon-evolution trainer-pokemon-evolution--prev">
        <h1 className="trainer-pokemon-evolution__name trainer-pokemon-evolution__name--prev">{this.props.prevEvolution.species.name}</h1>
        <div className="trainer-pokemon-evolution__sprite trainer-pokemon-evolution__sprite--prev">
          <SpriteComponent
            gender={this.props.gender}
            sprites={this.props.prevEvolution.sprite}
            shiny={this.props.shiny}
          />
        </div>
      </div>
    }
    else {
      return null;
    }
  }

  render() {
    console.log(this.props);
    return null;
    // return <div className="trainer-pokemon-evolution__wrapper">
    //   {
    //     this.getNextEvolution()
    //   }
    //   {
    //     this.getPrevEvolution()
    //   }
    // </div>

  }
}
