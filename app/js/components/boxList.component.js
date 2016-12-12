import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

@connect((store) => {
  return {

  }
})
export default class BoxList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Box List</h1>
  }
}
