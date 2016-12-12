import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';


@connect((store) => {
  return {

  }
})
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      {this.props.children}
    </div>
  }
}
