import React from 'react';
import ReactDOM from 'react-dom';

export default class ItemLevel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="pokemon-spotlight__level">
      <span className="pokemon-spotlight__level-name">Level</span><span className="pokemon-spotlight__level-value">{this.props.level}</span>
    </div>
  }
}
