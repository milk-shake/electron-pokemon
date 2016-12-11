import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

@connect((store) => {
  return {
    level: store.trainerPokemonReducer.pokemon[0].level
  }
})
export default class LevelTraitComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    if(this.props.level) {
      return <div className="trainer-pokemon-traits__level">
        <span className="trainer-pokemon-traits__level-name">Level </span><span className="trainer-pokemon-traits__level-value">{this.props.level}</span>
      </div>
    }
    else {
      return null;
    }
  }
}
