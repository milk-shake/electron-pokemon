import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    species: store.trainerPokemonReducer.species
  }
})
export default class SpeciesComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSpecies() {
    if(this.props.species) {
      return <h2 className="trainer-pokemon-meta__pokemon-species">{this.props.species.name}</h2>
    }
  }

  render() {
    return this.renderSpecies()
  }
}
