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
      <div className="pokemon-spotlight__types">
        {this.props.pokemon.attributes.trainerpokemonspecies[0].attributes.species[0].attributes.speciestype.map(function(type, index) {
          return <span key={index} className={`pokemon-spotlight__type pokemon-types pokemon-types--${type.attributes.type[0].attributes.identifier}`}>
            {type.attributes.type[0].attributes.identifier}
          </span>
        })}
      </div>
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

  renderHighestStat() {
    if(this.props.pokemon.attributes.trainerpokemoncharacteristic) {
      if(this.props.pokemon.attributes.trainerpokemoncharacteristic[0].attributes.characteristic[0].attributes.stat_id == this.props.statId) {
        return <span className="pokemon-spotlight__stat-highest ion ion-flame"></span>
      }
    }
  }

  renderStatModifier() {
    if(this.props.pokemon.attributes.trainerpokemonnature) {
      if(this.props.pokemon.attributes.trainerpokemonnature[0].attributes.nature[0].attributes.decreased_stat_id == this.props.pokemon.attributes.trainerpokemonnature[0].attributes.nature[0].attributes.increased_stat_id) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--neutral ion ion-minus-round"></span>
      }
      else if(this.props.pokemon.attributes.trainerpokemonnature[0].attributes.nature[0].attributes.decreased_stat_id == 1) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--decreased ion ion-arrow-down-b"></span>
      }
      else if(this.props.pokemon.attributes.trainerpokemonnature[0].attributes.nature[0].attributes.increased_stat_id == 1) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--increased ion ion-arrow-up-b"></span>
      }
    }

  }

  render() {
    return <div className="pokemon-spotlight__health">
      <span className="pokemon-spotlight__health-bar"></span>
      {this.renderHighestStat()}
      {this.renderStatModifier()}
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
        <PokemonSpotlightItemStat
          statId="2"
          stat={this.props.pokemon.attributes.attack}
          nature={this.props.pokemon.attributes.trainerpokemonnature}
          characteristic={this.props.pokemon.attributes.trainerpokemoncharacteristic}
          name="Attack"
        />
        <PokemonSpotlightItemStat
          statId="3"
          stat={this.props.pokemon.attributes.defence}
          nature={this.props.pokemon.attributes.trainerpokemonnature}
          characteristic={this.props.pokemon.attributes.trainerpokemoncharacteristic}
          name="Defence"
        />
        <PokemonSpotlightItemStat
          statId="4"
          stat={this.props.pokemon.attributes.sp_attack}
          nature={this.props.pokemon.attributes.trainerpokemonnature}
          characteristic={this.props.pokemon.attributes.trainerpokemoncharacteristic}
          name="Special Attack" />
        <PokemonSpotlightItemStat
          statId="5"
          stat={this.props.pokemon.attributes.sp_defence}
          nature={this.props.pokemon.attributes.trainerpokemonnature}
          name="Special Defence"
          characteristic={this.props.pokemon.attributes.trainerpokemoncharacteristic}
        />
        <PokemonSpotlightItemStat
          statId="6"
          stat={this.props.pokemon.attributes.speed}
          nature={this.props.pokemon.attributes.trainerpokemonnature}
          characteristic={this.props.pokemon.attributes.trainerpokemoncharacteristic}
          name="Speed"
        />
        <PokemonSpotlightItemStat
          statId="8"
          stat={this.props.pokemon.attributes.evasion}
          nature={this.props.pokemon.attributes.trainerpokemonnature}
          characteristic={this.props.pokemon.attributes.trainerpokemoncharacteristic}
          name="Evasion"
        />
      </div>
    )
  }
}

class PokemonSpotlightItemStat extends React.Component {
  constructor(props) {
    super(props);
  }

  renderStatModifier() {
    if(this.props.nature) {
      if(this.props.nature[0].attributes.nature[0].attributes.decreased_stat_id == this.props.nature[0].attributes.nature[0].attributes.increased_stat_id) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--neutral ion ion-minus-round"></span>
      }
      else if(this.props.nature[0].attributes.nature[0].attributes.decreased_stat_id == this.props.statId) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--decreased ion ion-arrow-down-b"></span>
      }
      else if(this.props.nature && this.props.nature[0].attributes.nature[0].attributes.increased_stat_id == this.props.statId) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--increased ion ion-arrow-up-b"></span>
      }
    }

  }

  renderHighestStat() {
    if(this.props.characteristic) {
      console.log(this.props.characteristic[0].attributes.characteristic[0].attributes.stat_id);
      if(this.props.characteristic[0].attributes.characteristic[0].attributes.stat_id == this.props.statId) {
        return <span className="pokemon-spotlight__stat-highest ion ion-flame"></span>
      }
    }
  }

  render() {
    return <div className="pokemon-spotlight__stat">
      <span className="pokemon-spotlight__stat-name">{this.props.name}</span>
      {this.renderHighestStat()}
      {this.renderStatModifier()}
      <span className="pokemon-spotlight__stat-value">{this.props.stat}</span>
    </div>
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
          return <div key={move.attributes.id} className="pokemon-spotlight__move">
            <span className="pokemon-spotlight__move-name">{move.attributes.move[0].attributes.movename[0].attributes.name}</span>
            {
              move.attributes.move[0].attributes.movetype[0].attributes.typename.map(function(name, index) {
                if(name.attributes.local_language_id == 9) {
                  return <span key={index} className={`pokemon-spotlight__move-type pokemon-types pokemon-types--${move.attributes.move[0].attributes.movetype[0].attributes.identifier}`}>{name.attributes.name}</span>
                }
                else {
                  return null;
                }
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

class PokemonSpotLightItemCharacteristic extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCharacteristic() {
    if(this.props.characteristic && this.props.characteristic.length) {
      return <div className="pokemon-spotlight__characteristic">
        <span className="pokemon-spotlight__characteristic-name">{this.props.characteristic[0].attributes.characteristic[0].attributes.characteristictext[0].attributes.message}</span>
      </div>
    }
    return <div className="pokemon-spotlight__characteristic">
      <span className="pokemon-spotlight__characteristic-name">No Characteristic</span>
    </div>
  }

  render() {
    return this.renderCharacteristic()
  }
}

class PokemonSpotLightItemNature extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNature() {
    if(this.props.nature && this.props.nature.length) {
      return <div className="pokemon-spotlight__nature">
        <span className="pokemon-spotlight__nature-name">{this.props.nature[0].attributes.nature[0].attributes.identifier}</span>
      </div>
    }
    return <div className="pokemon-spotlight__nature">
      <span className="pokemon-spotlight__nature-name">No Nature</span>
    </div>;
  }

  render() {
      return this.renderNature()
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


        <div className="pokemon-spotlight__natures">
          <h1 className="pokemon-spotlight__section-header">Nature</h1>
          <PokemonSpotLightItemNature nature={this.props.pokemon.attributes.trainerpokemonnature}/>
        </div>

        <div className="pokemon-spotlight__characteristicss">
          <h1 className="pokemon-spotlight__section-header">Characteristic</h1>
          <PokemonSpotLightItemCharacteristic characteristic={this.props.pokemon.attributes.trainerpokemoncharacteristic}/>
        </div>

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
