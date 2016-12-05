import React from 'react';
import ReactDOM from 'react-dom';

export default class TraitsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    }
  }

  handleClick(e) {
    this.setState({
      modal: !this.state.modal
    });

    e.target.parentNode.querySelector('.modal').classList.toggle('show');
  }

  render() {
      return <div className="trainer-pokemon-traits__wrapper">
        <div className="trainer-pokemon-traits">
          <div className="trainer-pokemon-traits__level" onClick={(e) => this.handleClick(e)}>
            <span className="trainer-pokemon-traits__level-name">Level </span><span className="trainer-pokemon-traits__level-value">{this.props.level}</span>
            </div>
            <div className="modal">
              <div className="modal__buttons">
                <span className="modal__button trainer-pokemon-traits__level-modal-button trainer-pokemon-traits__level-modal-button--increase">
                  <span className="trainer-pokemon-traits__level-modal-button-icon ion ion-arrow-up-b"></span>
                  <span className="trainer-pokemon-traits__level-modal-button-text">+1</span>
                </span>
                <span className="modal__button trainer-pokemon-traits__level-modal-button trainer-pokemon-traits__level-modal-button--decrease">
                  <span className="trainer-pokemon-traits__level-modal-button-icon ion ion-arrow-down-b"></span>
                  <span className="trainer-pokemon-traits__level-modal-button-text">-1</span>
                </span>
              </div>
          </div>

          <div className="trainer-pokemon-traits__nature" onClick={(e) => this.handleClick(e)}>
            <span className="trainer-pokemon-traits__nature-name">Nature </span><span className="trainer-pokemon-traits__nature-value">{this.props.nature.name}</span>
          </div>
          <div className="trainer-pokemon-traits__characteristic" onClick={(e) => this.handleClick(e)}>
            <span className="trainer-pokemon-traits__characteristic-name">Characteristic </span><span className="trainer-pokemon-traits__characteristic-value">{this.props.characteristic.message}</span>
          </div>
          <div className="trainer-pokemon-traits__ability" onClick={(e) => this.handleClick(e)}>
            <span className="trainer-pokemon-traits__ability-name">Ability </span><span className="trainer-pokemon-traits__ability-value">{this.props.ability.name}</span>
          </div>
        </div>
      </div>
  }
}
