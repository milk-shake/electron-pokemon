import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

import * as spotLightActions from "../../actions/spotLight.actions";

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box">
        <h1 className="box__header">Box 1</h1>
        <div className="box__contents">
          {this.props.pokemon.map(function(pokemon) {
            return <BoxItem handleAddToSpotLight={this.props.handleAddToSpotLight} key={pokemon.attributes.id} pokemon={pokemon} />
          }, this)}
        </div>
      </div>
    )
  }
}

class BoxItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div onClick={() => this.props.handleAddToSpotLight(this.props.pokemon)} className="box__item"><img src={"./img/sprites/pokemon/" + this.props.pokemon.attributes.trainerpokemonspecies["0"].attributes.species_id + ".png"}/></div>
  }
}


@connect((store) => {
  return {
    box1: store.TrainerPokemonReducer.box1
  }
})
export default class Boxes extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAddToSpotLight(pokemon) {
    this.props.dispatch(spotLightActions.addToSpotlight(pokemon));
  }

  renderBox1() {
    if(this.props.box1.length) {
      return <Box pokemon={this.props.box1} handleAddToSpotLight={this.handleAddToSpotLight.bind(this)} />
    }
  }

  render() {
    return <div className="box-list">
      {this.renderBox1()}
    </div>
  }
}
