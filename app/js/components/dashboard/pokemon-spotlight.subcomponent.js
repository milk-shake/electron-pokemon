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
              let props = pokemon.flatten();
              return (
                <Item
                  key={props.id}
                  pokemon={props}
                  handleRemoveFromSpotLight={this.props.handleRemoveFromSpotLight}
                  showModal={this.props.showModal}
                  getAllNatures={this.props.getAllNatures}
                  natures={this.props.natures}
                  getAllAbilities={this.props.getAllAbilities}
                  abilities={this.props.abilities}
                  getAllCharacteristics={this.props.getAllCharacteristics}
                  characteristics={this.props.characteristics}
                  updateTrait={this.props.updateTrait}
                  minimize={this.props.minimize}
                  updateNickname={this.props.updateNickname}
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
