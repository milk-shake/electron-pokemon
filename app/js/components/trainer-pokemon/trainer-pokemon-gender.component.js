import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

@connect((store) => {
  return {
    gender: store.trainerPokemonReducer.gender
  }
})
export default class GenderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch(this.props.gender.id) {
      case 1:
        return <span className="gender gender--female"></span>
        break;
      case 2:
        return <span className="gender gender--male"></span>
        break;
      case 3:
      default:
        return <span className="gender gender--genderless"></span>
        break;
    }
  }
}
