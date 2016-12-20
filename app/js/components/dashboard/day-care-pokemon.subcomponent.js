import React from 'react';
import ReactDOM from 'react-dom';
const assetPath = "./img/sprites/pokemon/";

// import PartyPokemonSprite from "./party-pokemon/party-pokemon-sprite.subcomponent";

class DayCareItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="day-care-pokemon__item">
        <img className="day-care-pokemon__sprite" onClick={() => this.props.handleAddToSpotLight(this.props.pokemon)} src={assetPath + this.props.pokemon.trainer_pokemon_species[0].species_id + ".png"}/>
      </div>
    )
  }
}

export default class DayCarePokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="day-care-pokemon">
      {/* <h1 className="pane__header">
        <span className="pane__header-text">Day Care</span>
      </h1> */}
      <div className="day-care-pokemon__contents">
        {
          this.props.pokemon.map(function(pokemon, index) {
            return (
              <DayCareItem
                pokemon={pokemon}
                key={index}
                handleAddToSpotLight={this.props.handleAddToSpotLight}
              />
            )
          }, this)
        }
        {this.props.pokemon.length ?
          <span className="day-care-pokemon__heart ion ion-heart"></span>
          :
          <div>
            <span className="day-care-pokemon__heart day-care-pokemon__heart--broken  ion ion-heart-broken"></span>
            <span className="day-care-pokemon__empty-message">No pokemon at the day care</span>
          </div>
        }

      </div>
      <span className="pane__footer"></span>


    </div>
  }
}
