import React from 'react';
import ReactDOM from 'react-dom';


import PartyPokemonSprite from "./party-pokemon/party-pokemon-sprite.subcomponent";

import * as spotLightActions from "../../actions/spotLight.actions";



export default class PartyPokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleMinimized(e, name) {
    e.target.classList.toggle('pane__button--minimize');
    e.target.classList.toggle('pane__button--maximize');
    e.target.classList.toggle('ion-chevron-left');
    e.target.classList.toggle('ion-chevron-right');
    this.props.minimize(name);
  }

  render() {
    return <div className="party-pokemon">
      <h1 className="pane__header">
        <span className="pane__header-text">Party</span>
        <span className="pane__buttons">
          <span className="pane__button pane__button--minimize ion ion-chevron-left" onClick={(e) => this.toggleMinimized(e, 'left-bar')}></span>
        </span>
      </h1>
      <div className="party-pokemon__list">
        {this.props.pokemon ? this.props.pokemon.map((poke) => {
            let props = poke.flatten();
            return <div onClick={() => this.props.handleAddToSpotLight(poke)} key={props.nick_name} className="party-pokemon__item">
              <PartyPokemonSprite id={props.pokemon_species[0].id} />
              <h1 className="party-pokemon__name">{props.nick_name}</h1>
              <h2 className="party-pokemon__genus">{props.pokemon_species[0].pokemon_species_names[0].name}</h2>
              <div className="party-pokemon__types">
                {props.pokemon_species[0].pokemon_types.map(function(type, index) {
                  return <span key={index} className={`party-pokemon__type pokemon-types pokemon-types--${type.types[0].identifier}`}>
                    {type.types[0].type_names[0].name}
                  </span>
                })}
              </div>
            </div>
        }, this) : <div className="party-pokemon__item"><h1 className="party-pokemon__message">You have no pokemon in your party!</h1></div>}
      </div>
    </div>
  }
}
