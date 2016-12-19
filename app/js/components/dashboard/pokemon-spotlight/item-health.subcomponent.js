import React from 'react';
import ReactDOM from 'react-dom';

export default  class ItemHealth extends React.Component {
  constructor(props) {
    super(props);
  }

  renderHighestStat() {
    if(this.props.characteristicStatId) {
      if(this.props.characteristicStatId == 1) {
        return <span className="pokemon-spotlight__stat-highest ion ion-flame"></span>
      }
    }
  }

  renderStatModifier() {
    if(this.props.natureStatIds.decreased && this.props.natureStatIds.increased) {
      if(this.props.natureStatIds.decreased == this.props.natureStatIds.increased) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--neutral ion ion-minus-round"></span>
      }
      else if(this.props.natureStatIds.decreased == 1) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--decreased ion ion-arrow-down-b"></span>
      }
      else if(this.props.natureStatIds.increased == 1) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--increased ion ion-arrow-up-b"></span>
      }
    }

  }

  render() {
    return <div className="pokemon-spotlight__health">
      <span className="pokemon-spotlight__health-bar"></span>
      {this.renderHighestStat()}
      {this.renderStatModifier()}
      <span className="pokemon-spotlight__health-value">{this.props.hp}/{this.props.hp}</span>
    </div>
  }
}
