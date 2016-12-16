import React from 'react';
import ReactDOM from 'react-dom';

import ItemInfo from "./item-info.subcomponent";
import ItemHealth from "./item-health.subcomponent";
import ItemLevel from "./item-level.subcomponent";
import ItemStatList from "./item-stat-list.subcomponent";
import ItemNature from "./item-nature.subcomponent";
import ItemAbility from "./item-ability.subcomponent";
import ItemCharacteristic from "./item-characteristic.subcomponent";
//TODO make itemmovelist
import ItemMove from "./item-move.subcomponent";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <div className="pokemon-spotlight__list-item">
      <span className="pane__header">{this.props.pokemon.nick_name}
        <span onClick={() => this.props.handleRemoveFromSpotLight(this.props.pokemon)} className="pane__button pane__button--close ion ion-close-round"></span>
      </span>
      <div className="pokemon-spotlight__item">
        <ItemInfo pokemon={this.props.pokemon} />
        <ItemHealth pokemon={this.props.pokemon}/>
        <ItemLevel pokemon={this.props.pokemon} />
        <ItemStatList pokemon={this.props.pokemon} />

        <div className="pokemon-spotlight__abilities">
          <h1 className="pokemon-spotlight__section-header">Abilities</h1>
          <ItemAbility
            ability={this.props.pokemon.abilities[0]}
            getAllAbilities={this.props.getAllAbilities}
            abilities={this.props.abilities}
            pokemon_id={this.props.pokemon.id}
          />
        </div>

        <div className="pokemon-spotlight__natures">
          <h1 className="pokemon-spotlight__section-header">Nature</h1>
          <ItemNature
            nature={this.props.pokemon.natures[0]}
            getAllNatures={this.props.getAllNatures}
            natures={this.props.natures}
          />
        </div>

        <div className="pokemon-spotlight__characteristics">
          <h1 className="pokemon-spotlight__section-header">Characteristic</h1>
          <ItemCharacteristic
            characteristic={this.props.pokemon.characteristics[0]}
            getAllCharacteristics={this.props.getAllCharacteristics}
            characteristics={this.props.characteristics}
          />
        </div>

        <div className="pokemon-spotlight__moves">
          <h1 className="pokemon-spotlight__section-header">Moves</h1>
          <ItemMove moves={this.props.pokemon.trainer_pokemon_moves}/>
        </div>
      </div>
      <span className="pane__footer"></span>
    </div>
  }
}
