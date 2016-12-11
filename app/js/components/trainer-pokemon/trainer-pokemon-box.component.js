import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

@connect((store) => {
  return {
    box: store.trainerPokemonReducer.box
  }
})
export default class BoxComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  renderBox() {
    if(this.props.box) {
      return <span className="trainer-pokemon-box__name">{this.props.box.name}</span>
    }
    else {
      return <span className="trainer-pokemon-box__name">{"Loading"}</span>
    }

  }

  render() {
    return <div className="trainer-pokemon-box">
      {
        this.renderBox()
      }

    </div>
  }
}
