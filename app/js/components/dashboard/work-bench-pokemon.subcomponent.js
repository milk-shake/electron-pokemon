import React from 'react';
import ReactDOM from 'react-dom';
const assetPath = "./img/sprites/pokemon/";

// import PartyPokemonSprite from "./party-pokemon/party-pokemon-sprite.subcomponent";

export default class WorkBenchPokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="work-bench-pokemon">
      <h1 className="pane__header">Bench</h1>
      <span className="pane__footer"></span>
    </div>
  }
}
