import React from 'react';
import ReactDOM from 'react-dom';

export default class DamageClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return <span className={"damage-class damage-class--" + this.props.type.name.toLowerCase()}>{this.props.type.name}</span>
  }
}
