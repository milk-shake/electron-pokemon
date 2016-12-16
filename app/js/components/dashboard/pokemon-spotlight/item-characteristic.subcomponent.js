import React from 'react';
import ReactDOM from 'react-dom';

import EditModal from "../../modal/editModal.component";

export default class Characteristic extends React.Component {
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
    if(!this.props.characteristics) {
      this.props.getAllCharacteristics()
    }

    this.setState({
      edit: true,
      modal: true
    })
  }


  renderResults(filtered, all) {
    let results = [];

    if(this.state.filteredCharacteristics) {
      results = this.state.filteredCharacteristics;
    }
    else if(this.props.characteristics) {
      results = this.props.characteristics;
    }

    return results.map(function(characteristic, index) {
      return <div key={index} className="edit__modal-search-result">{characteristic.characteristic_text[0].message}</div>
    });

  }


  hideEditModal() {
    this.setState({
      edit: false,
      modal: false
    })
  }

  onSearchInput(event) {
    let filtered = this.props.characteristics.filter(function(characteristic) {
      if(characteristic.characteristic_text[0].message.toLowerCase().startsWith(event.target.value)) {
        return characteristic;
      }
    });

    this.setState({
      filteredCharacteristics: filtered
    });
  }

  renderCharacteristic() {
    if(this.props.characteristic) {
      return (
        <div>
          <div className="pokemon-spotlight__characteristic" onClick={this.toggleEditPane.bind(this)}>
            <span className="pokemon-spotlight__characteristic-name">{this.props.characteristic.characteristic_text[0].message}</span>
          </div>
          <div className={'pane__edit' + ((this.state.edit) ? ' on' : '')} onClick={this.toggleEditPane.bind(this)}>
            <span className="pane__edit-button ion ion-edit" onClick={this.showEditModal.bind(this)}></span>
            <span className="pane__edit-button ion ion-trash-b"></span>
          </div>
          <EditModal
            activated={this.state.modal}
            title="Edit Characteristic"
            onClose={this.hideEditModal.bind(this)}
            onSearchChange={this.onSearchInput.bind(this)}
            searchPlaceholder="Search for a characteristic..."
            resultsTitle="Characteristic"
            renderResults={this.renderResults.bind(this)}
          />
        </div>
      )
    }
    return <div className="pokemon-spotlight__characteristic">
      <span className="pokemon-spotlight__characteristic-name">No Characteristic</span>
    </div>
  }

  render() {
    return this.renderCharacteristic()
  }
}
