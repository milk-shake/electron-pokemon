import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import PokemonMoveComponent from "./trainer-pokemon-move.component";

import {getMove1ForPokemonById, getMove2ForPokemonById, getMove3ForPokemonById, getMove4ForPokemonById} from "../../actions/trainerPokemonActions";

@connect((store) => {
  return {
    pokemon: store.trainerPokemonReducer.pokemon[0],
    moves: store.trainerPokemonReducer.moves
  }
})
export default class PokemonMovesComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(getMove1ForPokemonById(this.props.pokemon.move1Id));
    this.props.dispatch(getMove2ForPokemonById(this.props.pokemon.move2Id));
    this.props.dispatch(getMove3ForPokemonById(this.props.pokemon.move3Id));
    this.props.dispatch(getMove4ForPokemonById(this.props.pokemon.move4Id));
  }

  renderMove1() {
    if(this.props.moves && this.props.moves.move1) {
      return <PokemonMoveComponent move={this.props.moves.move1} key={this.props.moves.move1.name}/>
    }
    return null;
  }

  renderMove2() {
    if(this.props.moves && this.props.moves.move2) {
      return <PokemonMoveComponent move={this.props.moves.move2} key={this.props.moves.move2.name}/>
    }
    return null;
  }

  renderMove3() {
    if(this.props.moves && this.props.moves.move3) {
      return <PokemonMoveComponent move={this.props.moves.move3} key={this.props.moves.move3.name}/>
    }
    return null;
  }

  renderMove4() {
    if(this.props.moves && this.props.moves.move4) {
      return <PokemonMoveComponent move={this.props.moves.move4} key={this.props.moves.move4.name}/>
    }
    return null;
  }

  render() {
    return <div className="trainer-pokemon-moves__wrapper">
      <div className="trainer-pokemon-moves">
        {this.renderMove1()}
        {this.renderMove2()}
        {this.renderMove3()}
        {this.renderMove4()}
      </div>
    </div>
  }
}
