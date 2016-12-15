import React from 'react';
import ReactDOM from 'react-dom';

export default class BoxItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div onClick={() => this.props.handleAddToSpotLight(this.props.pokemon)} className="box__item"><img src={"./img/sprites/pokemon/" + this.props.pokemon.trainer_pokemon_species["0"].species_id + ".png"}/></div>
  }
}
