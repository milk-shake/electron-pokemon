import React from 'react';
import ReactDOM from 'react-dom';

export default  class ItemHealth extends React.Component {
  constructor(props) {
    super(props);
  }

  renderHighestStat() {
    if(this.props.pokemon.characteristics.length) {
      if(this.props.pokemon.characteristics[0].stat_id == 1) {
        return <span className="pokemon-spotlight__stat-highest ion ion-flame"></span>
      }
    }
  }

  renderStatModifier() {
    if(this.props.pokemon.natures.length) {
      if(this.props.pokemon.natures[0].decreased_stat_id == this.props.pokemon.natures[0].increased_stat_id) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--neutral ion ion-minus-round"></span>
      }
      else if(this.props.pokemon.natures[0].decreased_stat_id == 1) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--decreased ion ion-arrow-down-b"></span>
      }
      else if(this.props.pokemon.natures[0].increased_stat_id == 1) {
        return <span className="pokemon-spotlight__stat-modifier pokemon-spotlight__stat-modifier--increased ion ion-arrow-up-b"></span>
      }
    }

  }

  render() {
    return <div className="pokemon-spotlight__health">
      <span className="pokemon-spotlight__health-bar"></span>
      {this.renderHighestStat()}
      {this.renderStatModifier()}
      <span className="pokemon-spotlight__health-value">{this.props.pokemon.hp}/{this.props.pokemon.hp}</span>
    </div>
  }
}
