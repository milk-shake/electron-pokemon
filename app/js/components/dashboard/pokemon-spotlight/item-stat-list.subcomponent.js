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
          stat={this.props.attack}
          natureStatIds={this.props.natureStatIds}
          characteristicStatId={this.props.characteristicStatId}
          name="Attack"
        />
        <ItemStat
          statId="3"
          stat={this.props.defence}
          natureStatIds={this.props.natureStatIds}
          characteristicStatId={this.props.characteristicStatId}
          name="Defence"
        />
        <ItemStat
          statId="4"
          stat={this.props.sp_attack}
          natureStatIds={this.props.natureStatIds}
          characteristicStatId={this.props.characteristicStatId}
          name="Special Attack" />
        <ItemStat
          statId="5"
          stat={this.props.sp_defence}
          natureStatIds={this.props.natureStatIds}
          characteristicStatId={this.props.characteristicStatId}
          name="Special Defence"
        />
        <ItemStat
          statId="6"
          stat={this.props.speed}
          natureStatIds={this.props.natureStatIds}
          characteristicStatId={this.props.characteristicStatId}
          name="Speed"
        />
        <ItemStat
          statId="8"
          stat={this.props.evasion}
          natureStatIds={this.props.natureStatIds}
          characteristicStatId={this.props.characteristicStatId}
          name="Evasion"
        />
      </div>
    )
  }
}
