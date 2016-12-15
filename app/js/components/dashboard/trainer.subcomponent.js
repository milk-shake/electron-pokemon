import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class Trainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="trainer-details">
      <div className="trainer-details__wrapper">
        <div className="trainer-details__avatar"></div>
        <h1 className="trainer-details__name">{this.props.trainer.name}</h1>
      </div>
      <div className="trainer-details__actions">
        <Link to="/trainerPokemon/add" className="trainer-details__action">
          <span className="ion ion-plus-round"></span>
          <span className="trainer-details__action-tip">Add a new pokemon</span>
        </Link>
        <Link to="/trainerPokemon" className="trainer-details__action">
          <span className="ion ion-eye"></span>
          <span className="trainer-details__action-tip">See all pokemon</span>
        </Link>
        <Link to="/trainerPokemon" className="trainer-details__action">
          <span className="ion ion-cube"></span>
          <span className="trainer-details__action-tip">View boxes</span>
        </Link>
      </div>
    </div>
  }
}
