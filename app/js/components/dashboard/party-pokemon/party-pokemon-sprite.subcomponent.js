import React from 'react';
import ReactDOM from 'react-dom';

const assetPath = "./img/sprites/pokemon/";

export default class PartyPokemonSprite extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <img className="party-pokemon__sprite" src={assetPath + this.props.id + ".png"} />
  }
}
