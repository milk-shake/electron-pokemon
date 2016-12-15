import React from 'react';
import ReactDOM from 'react-dom';

import Item from "./pokemon-spotlight/item.subcomponent";

import * as spotLightActions from "../../actions/spotLight.actions";


export default class PokemonSpotlight extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSpotLight() {
    if(this.props.pokemon.length) {
      return <div className="pokemon-spotlight">
        <div className="pokemon-spotLight__list">
          {
            this.props.pokemon.map(function(pokemon) {
              return (
                <Item
                  key={pokemon.id}
                  pokemon={pokemon}
                  handleRemoveFromSpotLight={this.props.handleRemoveFromSpotLight}
                  getAllNatures={this.props.getAllNatures}
                  natures={this.props.natures}
                  getAllAbilities={this.props.getAllAbilities}
                  abilities={this.props.abilities}
                  getAllCharacteristics={this.props.getAllCharacteristics}
                  characteristics={this.props.characteristics}
                />
              )

            }, this)
          }
        </div>
      </div>
    }
    else {
      return <div className="pokemon-spotlight"></div>
    }
  }

  render() {
    return this.renderSpotLight()
  }
}
