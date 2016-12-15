import React from 'react';
import ReactDOM from 'react-dom';

import EditModal from "../../modal/editModal.component";

export default class ItemNature extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      modal: false,
    }
  }

  toggleEditPane() {
    this.setState({
      edit: !this.state.edit
    })
  }

  showEditModal() {
    if(!this.props.natures) {
      this.props.getAllNatures()
    }

    this.setState({
      edit: true,
      modal: true
    })
  }


  renderResults(filtered, all) {
    let results = [];

    if(this.state.filteredNatures) {
      results = this.state.filteredNatures;
    }
    else if(this.props.natures) {
      results = this.props.natures;
    }

    return results.map(function(nature, index) {
      console.log(nature);
      return <div key={index} className="edit__modal-search-result">{nature.nature_names[0].name}</div>
    });

  }


  hideEditModal() {
    this.setState({
      edit: false,
      modal: false
    })
  }

  onSearchInput(event) {
    let filtered = this.props.natures.filter(function(nature) {
      if(nature.identifier.startsWith(event.target.value)) {
        return nature;
      }
    });

    this.setState({
      filteredNatures: filtered
    });
  }

  renderNature() {
    if(this.props.nature && this.props.nature.length) {
      return (
        <div>
          <div className="pokemon-spotlight__nature" onClick={this.toggleEditPane.bind(this)}>
            <span className="pokemon-spotlight__nature-name">{this.props.nature[0].natures[0].nature_names[0].name}</span>
          </div>
          <div className={'pane__edit' + ((this.state.edit) ? ' on' : '')} onClick={this.toggleEditPane.bind(this)}>
            <span className="pane__edit-button ion ion-edit" onClick={this.showEditModal.bind(this)}></span>
            <span className="pane__edit-button ion ion-trash-b"></span>
          </div>
          <EditModal
            activated={this.state.modal}
            title="Edit Nature"
            onClose={this.hideEditModal.bind(this)}
            onSearchChange={this.onSearchInput.bind(this)}
            searchPlaceholder="Search for a nature..."
            resultsTitle="Natures"
            renderResults={this.renderResults.bind(this)}
          />
        </div>
      )

    }
    return <div className="pokemon-spotlight__nature">
      <span className="pokemon-spotlight__nature-name">No Nature</span>
    </div>;
  }

  render() {
      return this.renderNature()
  }
}
