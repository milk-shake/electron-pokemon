import React from 'react';
import ReactDOM from 'react-dom';

import ItemStat from "./item-stat.subcomponent";

export default class ItemStatList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pokemon-spotlight__stats">
        <h1 className="pokemon-spotlight__section-header">Stats</h1>
        <ItemStat
          statId="2"
          stat={this.props.pokemon.attack}
          nature={this.props.pokemon.natures[0]}
          characteristic={this.props.pokemon.characteristics[0]}
          name="Attack"
        />
        <ItemStat
          statId="3"
          stat={this.props.pokemon.defence}
          nature={this.props.pokemon.natures[0]}
          characteristic={this.props.pokemon.characteristics[0]}
          name="Defence"
        />
        <ItemStat
          statId="4"
          stat={this.props.pokemon.sp_attack}
          nature={this.props.pokemon.natures[0]}
          characteristic={this.props.pokemon.characteristics[0]}
          name="Special Attack" />
        <ItemStat
          statId="5"
          stat={this.props.pokemon.sp_defence}
          nature={this.props.pokemon.natures[0]}
          name="Special Defence"
          characteristic={this.props.pokemon.characteristics[0]}
        />
        <ItemStat
          statId="6"
          stat={this.props.pokemon.speed}
          nature={this.props.pokemon.natures[0]}
          characteristic={this.props.pokemon.characteristics[0]}
          name="Speed"
        />
        <ItemStat
          statId="8"
          stat={this.props.pokemon.evasion}
          nature={this.props.pokemon.natures[0]}
          characteristic={this.props.pokemon.characteristics[0]}
          name="Evasion"
        />
      </div>
    )
  }
}
