import React from 'react';
import ReactDOM from 'react-dom';

export default class Characteristic extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCharacteristic() {
    if(this.props.characteristic && this.props.characteristic.length) {
      return <div className="pokemon-spotlight__characteristic">
        <span className="pokemon-spotlight__characteristic-name">{this.props.characteristic[0].characteristics[0].characteristic_text[0].message}</span>
      </div>
    }
    return <div className="pokemon-spotlight__characteristic">
      <span className="pokemon-spotlight__characteristic-name">No Characteristic</span>
    </div>
  }

  render() {
    return this.renderCharacteristic()
  }
}
