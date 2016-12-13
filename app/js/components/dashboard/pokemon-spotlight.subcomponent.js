import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

import * as spotLightActions from "../../actions/spotLight.actions";

class PokemonSpotLightItemInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <img className="pokemon-spotlight__sprite" src={`./img/sprites/pokemon/${this.props.pokemon.attributes.trainerpokemonspecies[0].attributes.species_id}.png`}/>
      <h2 className="pokemon-spotlight__species">{this.props.pokemon.attributes.trainerpokemonspecies[0].attributes.species[0].attributes.identifier}</h2>
      {this.props.pokemon.attributes.helditem ?
        <div className="pokemon-spotlight__held-item">
          <span className="pokemon-spotlight__held-item-header">Holding</span>
          <img className="pokemon-spotlight__held-item-sprite" src="./img/sprites/items/ability-capsule.png" />
        </div> : null }
    </div>
  }
};

class PokemonSpotLightItemHealth extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="pokemon-spotlight__health">
      <span className="pokemon-spotlight__health-bar"></span>
      <span className="pokemon-spotlight__health-value">{this.props.pokemon.attributes.hp}/{this.props.pokemon.attributes.hp}</span>
    </div>
  }
}

class PokemonSpotLightItemLevel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="pokemon-spotlight__level">
      <span className="pokemon-spotlight__level-name">Level</span><span className="pokemon-spotlight__level-value">{this.props.pokemon.attributes.level}</span>
    </div>
  }
}

class PokemonSpotLightItemStatList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pokemon-spotlight__stats">
        <h1 className="pokemon-spotlight__section-header">Stats</h1>
        <PokemonSpotlightItemStat stat={this.props.pokemon.attributes.attack} name="Attack" />
        <PokemonSpotlightItemStat stat={this.props.pokemon.attributes.defence} name="Defence" />
        <PokemonSpotlightItemStat stat={this.props.pokemon.attributes.sp_attack} name="Special Attack" />
        <PokemonSpotlightItemStat stat={this.props.pokemon.attributes.sp_defence} name="Special Defence" />
        <PokemonSpotlightItemStat stat={this.props.pokemon.attributes.speed} name="Speed" />
        <PokemonSpotlightItemStat stat={this.props.pokemon.attributes.evasion} name="Evasion" />
      </div>
    )
  }
}

class PokemonSpotlightItemStat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="pokemon-spotlight__stat"><span className="pokemon-spotlight__stat-name">{this.props.name}</span><span className="pokemon-spotlight__stat-value">{this.props.stat}</span></div>
  }
}

class PokemonSpotLightItemMove extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMoves() {
    if(this.props.moves && this.props.moves.length) {
      return <div>
        {this.props.moves.map(function(move) {
          return <div key={move.attributes.id} className="pokemon-spotlight__move"><span className="pokemon-spotlight__move-name">{move.attributes.move[0].attributes.identifier}</span></div>
        })}
      </div>
    }
    else {
      return <div className="pokemon-spotlight__move">No moves</div>
    }

  }

  render() {
    return this.renderMoves()
  }
}

class PokemonSpotLightItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="pokemon-spotlight__list-item">
      <span className="pokemon-spotlight__item-header">{this.props.pokemon.attributes.nick_name} <span onClick={() => this.props.handleRemove(this.props.pokemon)} className="pokemon-spotlight__item-header-close ion ion-close-round"></span></span>
      <div className="pokemon-spotlight__item">
        <PokemonSpotLightItemInfo pokemon={this.props.pokemon} />
        <PokemonSpotLightItemHealth pokemon={this.props.pokemon}/>
        <PokemonSpotLightItemLevel pokemon={this.props.pokemon} />
        <PokemonSpotLightItemStatList pokemon={this.props.pokemon} />

        <div className="pokemon-spotlight__moves">
          <h1 className="pokemon-spotlight__section-header">Moves</h1>
          <PokemonSpotLightItemMove moves={this.props.pokemon.attributes.trainerpokemonmove}/>
        </div>
      </div>
      <span className="pokemon-spotlight__item-footer"></span>
    </div>
  }
}

@connect((store) => {
  return {
    pokemon: store.SpotLightReducer.pokemon
  }
})
export default class PokemonSpotlight extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRemove(pokemon) {
    this.props.dispatch(spotLightActions.removeFromSpotlight(pokemon))
  }

  renderSpotLight() {
    if(this.props.pokemon.length) {
      return <div className="pokemon-spotlight">
        <div className="pokemon-spotLight__list">
          {
            this.props.pokemon.map(function(pokemon) {
              return <PokemonSpotLightItem key={pokemon.attributes.id} pokemon={pokemon} handleRemove={this.handleRemove.bind(this)}/>
            }, this)
          }
        </div>
      </div>
    }
    return null;
  }

  render() {
    return this.renderSpotLight()
  }
}
