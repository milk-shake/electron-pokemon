import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

import Box from "./boxes/box.subcomponent";

export default class Boxes extends React.Component {
  constructor(props) {
    super(props);
  }

  renderBox1() {
    if(this.props.boxes.box1.length) {
      return <Box pokemon={this.props.boxes.box1} handleAddToSpotLight={this.props.handleAddToSpotLight} />
    }
  }

  render() {
    return <div className="box-list">
      {this.renderBox1()}
    </div>
  }
}
