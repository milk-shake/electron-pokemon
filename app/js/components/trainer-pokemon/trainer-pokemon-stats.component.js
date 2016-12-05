import React from 'react';
import ReactDOM from 'react-dom';

export default class StatsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return <div className="trainer-pokemon-stats__wrapper">
        <div className="trainer-pokemon-stats">
          {/* <div className="trainer-pokemon-stats__stat trainer-pokemon-stats__health">
            <span className="trainer-pokemon-stats__health-bar"></span>
            <span className="trainer-pokemon-stats__stat-value">{this.props.hp.value}/{this.props.hp.value}</span>
          </div> */}
          <div className="trainer-pokemon-stats__stat">
            <span className="trainer-pokemon-stats__stat-name">{this.props.attack.name}</span>
            <span className="trainer-pokemon-stats__stat-value">{this.props.attack.value}</span>
          </div>
          <div className="trainer-pokemon-stats__stat">
            <span className="trainer-pokemon-stats__stat-name">{this.props.defence.name}</span>
            <span className="trainer-pokemon-stats__stat-value">{this.props.defence.value}</span>
          </div>
          <div className="trainer-pokemon-stats__stat">
            <span className="trainer-pokemon-stats__stat-name">Special Attack</span>
            <span className="trainer-pokemon-stats__stat-value">{this.props.spAttack.value}</span>
          </div>
          <div className="trainer-pokemon-stats__stat">
            <span className="trainer-pokemon-stats__stat-name">Special Defence</span>
            <span className="trainer-pokemon-stats__stat-value">{this.props.spDefence.value}</span>
          </div>
          <div className="trainer-pokemon-stats__stat">
            <span className="trainer-pokemon-stats__stat-name">Speed</span>
            <span className="trainer-pokemon-stats__stat-value">{this.props.speed.value}</span>
          </div>
          <div className="trainer-pokemon-stats__stat">
            <span className="trainer-pokemon-stats__stat-name">Evasion</span>
            <span className="trainer-pokemon-stats__stat-value">{this.props.evasion.value}</span>
          </div>
        </div>
      </div>
  }
}
