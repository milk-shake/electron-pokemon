import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';


@connect((store) => {
  return {
    nature: store.trainerPokemonReducer.nature
  }
})
export default class NatureTraitComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNature() {
    if(this.props.nature) {
      return <div className="trainer-pokemon-traits__nature">
        <span className="trainer-pokemon-traits__nature-name">Nature </span><span className="trainer-pokemon-traits__nature-value">{this.props.nature.name}</span>
      </div>
    }

    return null;
  }

  render() {
    return this.renderNature()
  }
}
