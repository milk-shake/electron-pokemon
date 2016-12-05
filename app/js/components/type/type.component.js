import React from 'react';
import ReactDOM from 'react-dom';

export default class TypeComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return <span className={"pokemon-types pokemon-types--" + this.props.type.name.toLowerCase()}>{this.props.type.name}</span>
  }
}
