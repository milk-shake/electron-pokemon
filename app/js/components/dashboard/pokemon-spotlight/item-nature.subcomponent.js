import React from 'react';
import ReactDOM from 'react-dom';

export default class ItemNature extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNature() {
    if(this.props.nature && this.props.nature.length) {
      return <div className="pokemon-spotlight__nature">
        <span className="pokemon-spotlight__nature-name">{this.props.nature[0].natures[0].nature_names[0].name}</span>
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
