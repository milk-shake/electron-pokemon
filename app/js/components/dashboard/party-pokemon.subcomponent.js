import React from 'react';
import ReactDOM from 'react-dom';


import PartyPokemonSprite from "./party-pokemon/party-pokemon-sprite.subcomponent";

import * as spotLightActions from "../../actions/spotLight.actions";



export default class PartyPokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="party-pokemon">
      <h1 className="party-pokemon__header">Party</h1>
      <div className="party-pokemon__list">
        {this.props.pokemon ? this.props.pokemon.map(function(poke) {
            return <div onClick={() => this.props.handleAddToSpotLight(poke)} key={poke.nick_name} className="party-pokemon__item">
              <PartyPokemonSprite id={poke.trainer_pokemon_species[0].species_id} />
              <h1 className="party-pokemon__name">{poke.nick_name}</h1>
              <h2 className="party-pokemon__genus">{poke.trainer_pokemon_species[0].pokemon_species[0].pokemon_species_names[0].name}</h2>
              <div className="party-pokemon__types">
                {poke.trainer_pokemon_species[0].pokemon_species[0].pokemon_types.map(function(type, index) {
                  return <span key={index} className={`party-pokemon__type pokemon-types pokemon-types--${type.types[0].identifier}`}>
                    {type.types[0].type_names[0].name}
                  </span>
                })}
              </div>


            </div>
        }, this) : <div className="party-pokemon__item"><h1 className="party-pokemon__message">You have no pokemon in your party!</h1></div>}
      </div>
      <span className="party-pokemon__footer"></span>


    </div>
  }
}
