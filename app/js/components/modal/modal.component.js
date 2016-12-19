import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import * as ModalActions from "../../actions/modal.actions";

import FilterModal from "./filter-modal.subcomponent";

let modals = {
  "FILTER": FilterModal
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

  render() {
    const Modal = modals[this.props.modal.type];
    if(Modal) {
      return (
        <div className={'modal__wrapper' + ((this.props.modal.type) ? ' on' : '')}>
          <div className="modal__bg"></div>
          <div className="modal">
            <span className="pane__header">{this.props.modal.props.title} <span onClick={() => this.props.dispatch(ModalActions.closeModal())} className="pane__button pane__button--close ion ion-close-round"></span></span>
            {(Modal) ? <Modal
                          {...this.props.modal.props}
                          filtered={this.props.modal.filtered}
                          onFilterInput={this.onFilterInput.bind(this)}
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
