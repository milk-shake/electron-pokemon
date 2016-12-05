import React from 'react';
import ReactDOM from 'react-dom';

export default class BoxComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="trainer-pokemon-box">
      <span className="trainer-pokemon-box__name">{this.props.box.name}</span>
    </div>
  }
}
