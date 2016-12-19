import React from 'react';
import ReactDOM from 'react-dom';

export default class ItemStat extends React.Component {
  constructor(props) {
    super(props);
  }

  renderStatModifier() {
    if(this.props.natureStatIds.decreased && this.props.natureStatIds.increased) {
      if(this.props.natureStatIds.decreased == this.props.natureStatIds.increased) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--neutral ion ion-minus-round"></span>
      }
      else if(this.props.natureStatIds.decreased == this.props.statId) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--decreased ion ion-arrow-down-b"></span>
      }
      else if(this.props.natureStatIds.increased == this.props.statId) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--increased ion ion-arrow-up-b"></span>
      }
    }

  }

  renderHighestStat() {
    if(this.props.characteristicStatId) {
      if(this.props.characteristicStatId == this.props.statId) {
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
