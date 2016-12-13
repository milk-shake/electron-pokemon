import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

let assetPath = "./img/sprites/pokemon/";

import * as spotLightActions from "../../actions/spotLight.actions";


class PartyPokemonSprite extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <img className="party-pokemon__sprite" src={assetPath + this.props.id + ".png"} />
  }
}

@connect((store) => {
  return {
    pokemon: store.TrainerPokemonReducer.party
  }
})
export default class PartyPokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="party-pokemon">

      <h1 className="party-pokemon__header">Party</h1>
      <div className="party-pokemon__list">
        {this.props.pokemon.length ? this.props.pokemon.map(function(poke) {
            return <div onClick={() => this.props.dispatch(spotLightActions.addToSpotlight(poke))} key={poke.attributes.nick_name} className="party-pokemon__item">
              <PartyPokemonSprite id={poke.attributes.trainerpokemonspecies[0].attributes.species_id} />
              <h1 className="party-pokemon__name">{poke.attributes.nick_name}</h1>
              <h2 className="party-pokemon__genus">{poke.attributes.trainerpokemonspecies[0].attributes.species[0].attributes.identifier}</h2>
            </div>
        }, this) : <div className="party-pokemon__item"><h1 className="party-pokemon__message">You have no pokemon in your party!</h1></div>}
      </div>
      <span className="party-pokemon__footer"></span>


    </div>
  }
}
