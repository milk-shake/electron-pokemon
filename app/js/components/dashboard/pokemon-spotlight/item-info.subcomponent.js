import React from 'react';
import ReactDOM from 'react-dom';

export default class ItemInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <div className="pokemon-spotlight__types">
        {this.props.types.map(function(type, index) {
          return <span key={index} className={`pokemon-spotlight__type pokemon-types pokemon-types--${type.types[0].identifier}`}>
            {type.types[0].type_names[0].name}
          </span>
        })}
      </div>
      <img className="pokemon-spotlight__sprite" src={`./img/sprites/pokemon/${this.props.species_id}.png`}/>
      <h2 className="pokemon-spotlight__species">{this.props.species_name}</h2>
      <h3 className="pokemon-spotlight__genus">{this.props.species_genus}</h3>
      {this.props.helditem ?
        <div className="pokemon-spotlight__held-item">
          <span className="pokemon-spotlight__held-item-header">Holding</span>
          <img className="pokemon-spotlight__held-item-sprite" src="./img/sprites/items/ability-capsule.png" />
        </div> : null }
    </div>
  }
};
