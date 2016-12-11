import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

@connect((store) => {
  return {
    characteristic: store.trainerPokemonReducer.characteristic
  }
})
export default class CharacteristicTraitComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCharacteristic() {
    console.log(this.props);
    if(this.props.characteristic) {
      return <div className="trainer-pokemon-traits__characteristic">
        <span className="trainer-pokemon-traits__characteristic-name">Characteristic </span><span className="trainer-pokemon-traits__characteristic-value">{this.props.characteristic.message}</span>
      </div>
    }
    return null;
  }

  render() {
    return this.renderCharacteristic()
  }
}
