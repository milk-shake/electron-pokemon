import React from 'react';
import ReactDOM from 'react-dom';

export default class FilterModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let results = (this.props.filtered) ? this.props.filtered : this.props.results;
    return (
      <div>
        <div className="modal__content">
          <label className="input--search__label">
            <span className="input--search__icon ion-search"></span>
            <input ref="search" type="text" className="input--search" placeholder={this.props.placeholder} onChange={(e) => this.props.onFilterInput(e.target.value)}/>
          </label>
          <span className="pane__header">Results</span>
          <div className="modal--filter__results">
            { results.map(function(result, index) {
              return <div key={index} className="modal--filter__result" onClick={(e) => this.props.onResultsClick(result.object)}>{result.filterOn}</div>
            }, this)}
          </div>
        </div>
      </div>
    )

  }
}
