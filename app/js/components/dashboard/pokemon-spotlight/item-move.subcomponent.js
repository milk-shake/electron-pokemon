import React from 'react';
import ReactDOM from 'react-dom';

export default class ItemMove extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMoves() {
    if(this.props.moves && this.props.moves.length) {
      return <div>
        {this.props.moves.map(function(move) {
          return <div key={move.id} className="pokemon-spotlight__move">
            <span className="pokemon-spotlight__move-name">{move.moves[0].move_names[0].name}</span>
            {
              move.moves[0].types[0].type_names.map(function(name, index) {
                return <span key={index} className={`pokemon-spotlight__move-type pokemon-types pokemon-types--${move.moves[0].types[0].identifier}`}>{move.moves[0].types[0].type_names[0].name}</span>
              })
            }
          </div>
        })}
      </div>
    }
    else {
      return <div className="pokemon-spotlight__move">No Moves</div>
    }

  }

  render() {
    return this.renderMoves()
  }
}
