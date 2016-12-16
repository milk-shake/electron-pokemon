import React from 'react';
import ReactDOM from 'react-dom';

export default class ItemInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <div className="pokemon-spotlight__types">
        {this.props.pokemon.pokemon_species[0].pokemon_types.map(function(type, index) {
          return <span key={index} className={`pokemon-spotlight__type pokemon-types pokemon-types--${type.types[0].identifier}`}>
            {type.types[0].type_names[0].name}
          </span>
        })}
      </div>
      <img className="pokemon-spotlight__sprite" src={`./img/sprites/pokemon/${this.props.pokemon.species_id}.png`}/>
      <h2 className="pokemon-spotlight__species">{this.props.pokemon.pokemon_species[0].pokemon_species_names[0].name}</h2>
      <h3 className="pokemon-spotlight__genus">{this.props.pokemon.pokemon_species[0].pokemon_species_names[0].genus}</h3>
      {this.props.pokemon.helditem ?
        <div className="pokemon-spotlight__held-item">
          <span className="pokemon-spotlight__held-item-header">Holding</span>
          <img className="pokemon-spotlight__held-item-sprite" src="./img/sprites/items/ability-capsule.png" />
        </div> : null }
    </div>
  }
};
