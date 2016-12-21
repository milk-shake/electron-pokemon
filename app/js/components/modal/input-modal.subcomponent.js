import React from 'react';
import ReactDOM from 'react-dom';

export default class InputModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="modal__content modal__content--input">
          <label className="input--text__label">
            <span className="input--text__icon ion ion-edit"></span>
            <input ref="input" type="text" className="input--text" placeholder={this.props.placeholder} />
          </label>
          <button onClick={() => this.props.onDone(this.refs.input.value)}className="button button--positive"><span className="button__icon ion ion-checkmark-round"></span><span className="button__text"></span></button>
        </div>
      </div>
    )

  }
}
