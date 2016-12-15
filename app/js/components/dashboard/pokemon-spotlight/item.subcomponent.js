import React from 'react';
import ReactDOM from 'react-dom';

import ItemInfo from "./item-info.subcomponent";
import ItemHealth from "./item-health.subcomponent";
import ItemLevel from "./item-level.subcomponent";
import ItemStatList from "./item-stat-list.subcomponent";
import ItemNature from "./item-nature.subcomponent";
import ItemCharacteristic from "./item-characteristic.subcomponent";
//TODO make itemmovelist
import ItemMove from "./item-move.subcomponent";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="pokemon-spotlight__list-item">
      <span className="pokemon-spotlight__item-header">{this.props.pokemon.nick_name}
        <span onClick={() => this.props.handleRemoveFromSpotLight(this.props.pokemon)} className="pokemon-spotlight__item-header-close ion ion-close-round"></span>
      </span>
      <div className="pokemon-spotlight__item">
        <ItemInfo pokemon={this.props.pokemon} />
        <ItemHealth pokemon={this.props.pokemon}/>
        <ItemLevel pokemon={this.props.pokemon} />
        <ItemStatList pokemon={this.props.pokemon} />


        <div className="pokemon-spotlight__natures">
          <h1 className="pokemon-spotlight__section-header">Nature</h1>
          <ItemNature nature={this.props.pokemon.trainer_pokemon_natures}/>
        </div>

        <div className="pokemon-spotlight__characteristicss">
          <h1 className="pokemon-spotlight__section-header">Characteristic</h1>
          <ItemCharacteristic characteristic={this.props.pokemon.trainer_pokemon_characteristics}/>
        </div>

        <div className="pokemon-spotlight__moves">
          <h1 className="pokemon-spotlight__section-header">Moves</h1>
          <ItemMove moves={this.props.pokemon.trainer_pokemon_moves}/>
        </div>
      </div>
      <span className="pokemon-spotlight__item-footer"></span>
    </div>
  }
}
