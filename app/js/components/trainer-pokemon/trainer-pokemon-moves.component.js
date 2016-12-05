import React from 'react';
import ReactDOM from 'react-dom';

import PokemonMoveComponent from "./trainer-pokemon-move.component";


export default class PokemonMovesComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="trainer-pokemon-moves__wrapper">
      <div className="trainer-pokemon-moves">
        {this.props.moves.map(function(move) {
          return <PokemonMoveComponent move={move} key={move.name} onClick={this.handleClick}/>
        }, this)}
      </div>
    </div>
  }
}
