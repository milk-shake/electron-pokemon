import React from 'react';
import ReactDOM from 'react-dom';

import EditModal from "../../modal/editModal.component";

export default class ItemAbility extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      modal: false
    }
  }

  toggleEditPane() {
    this.setState({
      edit: !this.state.edit
    })
  }

  showEditModal() {
    if(!this.props.abilities) {
      this.props.getAllAbilities(this.props.pokemon_id)
    }

    this.setState({
      edit: true,
      modal: true
    })
  }

  hideEditModal() {
    this.setState({
      edit: false,
      modal: false
    })
  }

  renderResults() {
    let results = [];

    if(this.state.filteredAbilities) {
      results = this.state.filteredAbilities;
    }
    else if(this.props.abilities) {
      results = this.props.abilities;
    }



    return results.map(function(ability, index) {
      return <div key={index} className="edit__modal-search-result">{ability.abilities[0].ability_names[0].name}</div>
    });

  }

  onSearchInput(event) {
    let filtered = this.props.abilities.filter(function(ability) {
      if(ability.abilities[0].ability_names[0].name.toLowerCase().startsWith(event.target.value)) {
        return ability;
      }
    });

    this.setState({
      filteredAbilities: filtered
    });
  }

  renderAbility() {
    if(this.props.ability) {
      return (
        <div>
          <div className="pokemon-spotlight__ability" onClick={this.toggleEditPane.bind(this)}>
            <span className="pokemon-spotlight__ability-name">{this.props.ability.ability_names[0].name}</span>
          </div>
          <div className={'pane__edit' + ((this.state.edit) ? ' on' : '')} onClick={this.toggleEditPane.bind(this)}>
            <span className="pane__edit-button ion ion-edit" onClick={this.showEditModal.bind(this)}></span>
            <span className="pane__edit-button ion ion-trash-b"></span>
          </div>
          <EditModal
            activated={this.state.modal}
            title="Edit Ability"
            onClose={this.hideEditModal.bind(this)}
            onSearchChange={this.onSearchInput.bind(this)}
            searchPlaceholder="Search for an ability..."
            resultsTitle="Abilities"
            renderResults={this.renderResults.bind(this)}
          />
        </div>
      )

    }
    return <div className="pokemon-spotlight__ability">
      <span className="pokemon-spotlight__ability-name">No Ability</span>
    </div>;
  }

  render() {
      return this.renderAbility()
  }
}
