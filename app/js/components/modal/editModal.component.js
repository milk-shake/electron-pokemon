import React from 'react';
import ReactDOM from 'react-dom';

export default class EditModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'edit__modal-wrapper' + ((this.props.activated) ? ' on' : '')}>
        <div className="edit__modal-bg"></div>
        <div className="edit__modal">
          <span className="pane__header">{this.props.title} <span onClick={() => this.props.onClose()} className="pane__button pane__button--close ion ion-close-round"></span></span>
          <div className="edit__modal-content">
            <label className="input--search__label">
              <span className="input--search__icon ion-search"></span>
              <input type="text" className="input--search" placeholder={this.props.searchPlaceholder} onChange={(e) => this.props.onSearchChange(e)}/>
            </label>
            <span className="pane__header">{this.props.resultsTitle}</span>
            <div className="edit__modal-search-results">
              { this.props.renderResults() }
            </div>
          </div>
        </div>
      </div>
    )

  }
}
