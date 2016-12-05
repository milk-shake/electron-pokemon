import React from 'react';
import ReactDOM from 'react-dom';

export default class MoveMetaComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  toggle() {
    return ((this.props.open) ? "open " : "") + "trainer-pokemon-move-meta";
  }

  displayAilment() {
    if(this.props.meta.ailment !== 'none') {
      return <h4 className="trainer-pokemon-move-meta__ailment">{this.props.meta.ailment + " " + (this.props.meta.effectChance) + "%"}</h4>
    }
    else {
      return null;
    }
  }

  displayStatChange() {
    if(this.props.meta.statChange) {
      return <div className="trainer-pokemon-move-meta__stat-changes">
        <p className="trainer-pokemon-move-meta__stat-change">{this.props.meta.statChange.name} {(this.props.meta.statChance == 0) ? "100%" : this.props.meta.statChance + "%" }</p>
      </div>
    }
    else {
      return null;
    }
  }

  render() {
    return <div className={this.toggle()}>
      <div className="trainer-pokemon-move-meta__effects">
        <h4 className="trainer-pokemon-move-meta__description">{this.props.meta.description}</h4> {this.displayAilment()}
      </div>
      {this.displayStatChange()}
      <p className="trainer-pokemon-move-meta__target">{this.props.meta.target}</p>
      <div className="trainer-pokemon-move-meta__boosts">
        <div className="trainer-pokemon-move-meta__boost">
          <h4 className="trainer-pokemon-move-meta__boost-header">Drain</h4>
          <span className="trainer-pokemon-move-meta__boost-value">{this.props.meta.drain}</span>
        </div>
        <div className="trainer-pokemon-move-meta__boost">
          <h4 className="trainer-pokemon-move-meta__boost-header">Healing</h4>
          <span className="trainer-pokemon-move-meta__boost-value">{this.props.meta.healing}</span>
        </div>
        <div className="trainer-pokemon-move-meta__boost">
          <h4 className="trainer-pokemon-move-meta__boost-header">Critical Rate</h4>
          <span className="trainer-pokemon-move-meta__boost-value">{this.props.meta.critRate + "%"}</span>
        </div>
      </div>
      <p className="trainer-pokemon-move-meta__flavor">{this.props.meta.flavor}</p>

    </div>
  }
}
