import React from 'react';
import ReactDOM from 'react-dom';

export default class ItemTrait extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className="pokemon-spotlight__traits">
          <h1 className="pokemon-spotlight__section-header">{this.props.traitName}
            <span className="pokemon-spotlight__section-header-icons">
              <span className="ion ion-eye"></span>
              <span className="ion ion-edit" onClick={() => this.props.onEditClick({type: this.props.traitName.toUpperCase(), title: this.props.traitName})}></span>
              <span className="ion ion-trash-b"></span>
            </span>
          </h1>
          <div className="pokemon-spotlight__trait">
            <span className="pokemon-spotlight__trait-name">{this.props.name ? this.props.name : "No " + this.props.traitName}</span>
          </div>
        </div>
      )
  }
}
