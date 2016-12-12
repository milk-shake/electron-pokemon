import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

@connect((store) => {
  return {

  }
})
export default class Move extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Move</h1>
  }
}
