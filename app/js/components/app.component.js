import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Modal from "./modal/modal.component";

import * as TrainerActions from "../actions/trainer.actions";

@connect((store) => {
  return {
    trainer: store.TrainerReducer.trainer
  }
})
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(TrainerActions.getTrainerById(1));
  }

  renderChildren() {
    if(this.props.trainer) {
      let children = React.Children.map(this.props.children, function (child) {
          return React.cloneElement(child, {
            trainer: this.props.trainer
          })
      }, this);

      return (
        <div>
          <Modal />
          {children}
        </div>
      )
    }

    return null;
  }

  render() {
    return this.renderChildren()
  }
}
