import React from 'react';
import ReactDOM from 'react-dom';

export default class ItemStat extends React.Component {
  constructor(props) {
    super(props);
  }

  renderStatModifier() {
    if(this.props.nature.length) {
      if(this.props.nature.decreased_stat_id == this.props.nature.increased_stat_id) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--neutral ion ion-minus-round"></span>
      }
      else if(this.props.nature.decreased_stat_id == this.props.statId) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--decreased ion ion-arrow-down-b"></span>
      }
      else if(this.props.nature && this.props.nature.increased_stat_id == this.props.statId) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--increased ion ion-arrow-up-b"></span>
      }
    }

  }

  renderHighestStat() {
    if(this.props.characteristic.length) {
      if(this.props.characteristic.stat_id == this.props.statId) {
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
