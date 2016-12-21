import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import * as ModalActions from "../../actions/modal.actions";

import FilterModal from "./filter-modal.subcomponent";
import InputModal from "./input-modal.subcomponent";

let modals = {
  "FILTER": FilterModal,
  "INPUT": InputModal
}
@connect((store) => {
  return {
    modal: store.ModalReducer
  }
})
export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  onFilterInput(val) {
    this.props.dispatch(ModalActions.onFilterInput(val));
  }

  onResultsClick() {
    if(typeof this.props.modal.props.onResultsClick == 'function') {
      this.props.modal.props.onResultsClick(arguments);
    }
    this.props.dispatch(ModalActions.closeModal());
  }

  onDone() {
    if(typeof this.props.modal.props.onDone == 'function') {
      this.props.modal.props.onDone(arguments);
    }
    this.props.dispatch(ModalActions.closeModal());
  }

  render() {
    const Modal = modals[this.props.modal.type];
    if(Modal) {
      return (
        <div className={'modal__wrapper' + ((this.props.modal.type) ? ' on' : '')}>
          <div className="modal__bg"></div>
          <div className="modal">
            <span className="pane__header">
              <span className="pane__header-text">
                {this.props.modal.props.title}
              </span>
              <span className="pane__buttons">
                <span onClick={() => this.props.dispatch(ModalActions.closeModal())} className="pane__button pane__button--close ion ion-close-round"></span>
              </span>
            </span>
            {(Modal) ? <Modal
                          {...this.props.modal.props}
                          onResultsClick={this.onResultsClick.bind(this)}
                          filtered={this.props.modal.filtered}
                          onFilterInput={this.onFilterInput.bind(this)}
                          onDone={this.onDone.bind(this)}
                        /> : null
          }
          </div>
        </div>
      )
    }
    else {
      return null;
    }


  }
}
