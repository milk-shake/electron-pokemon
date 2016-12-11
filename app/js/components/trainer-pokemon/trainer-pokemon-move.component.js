import React from 'react';
import ReactDOM from 'react-dom';
import TypeComponent from "../type/type.component";
import DamageClassComponent from "../type/damageClass.component";
import MoveMetaComponent from "./trainer-pokemon-move-meta.component";

export default class MoveComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }

    this.meta = {
      ailment: this.props.move.ailment,
      ailmentChance: this.props.move.ailmentChance,
      critRate: this.props.move.critRate,
      drain: this.props.move.drain,
      effect: this.props.move.effect,
      effectChance: this.props.move.effectChance,
      flinchChance: this.props.move.flinchChance,
      healing: this.props.move.healing,
      hits: this.props.move.hits,
      turns: this.props.move.turns,
      description: this.props.move.moveDescription,
      flavor: this.props.move.moveFlavor,
      target: this.props.move.moveTarget,
      priority: this.props.move.priority,
      statChance: this.props.move.statChance,
      statChange: this.props.move.statChange
    };

  }

  componentDidMount() {
    this.setState({
      open: false
    });
  }

  handleClick() {
    var stateChange = !this.state.open;
    this.setState({
      open: !this.state.open
    });
  }

  toggle() {
    return ((this.state.open) ? "open " : "") + "trainer-pokemon-moves__move";
  }

  render() {
    return <div>
      <div className={this.toggle()} onClick={(e) => this.handleClick(e)}>
        <h1 className="trainer-pokemon-moves__name">{this.props.move.name}</h1>
        <div className="trainer-pokemon-moves__type">
          {this.props.move.type ?
            <TypeComponent
              type={this.props.move.type}
            />
            :
            null
          }

        </div>
        <div className="trainer-pokemon-moves__damage-class">
          {/* <DamageClassComponent
            type={this.props.move.damageClass}
          /> */}
        </div>
        <div className="trainer-pokemon-moves__stats">
          <span className="trainer-pokemon-moves__stat">
            <span className="trainer-pokemon-moves__stat-name">Accuracy</span><span className="trainer-pokemon-moves__stat-value">{this.props.move.accuracy}</span>
          </span>
          <span className="trainer-pokemon-moves__stat">
            <span className="trainer-pokemon-moves__stat-name">Power</span><span className="trainer-pokemon-moves__stat-value">{this.props.move.power}</span>
          </span>
          <span className="trainer-pokemon-moves__stat">
            <span className="trainer-pokemon-moves__stat-name">PP</span><span className="trainer-pokemon-moves__stat-value">{this.props.move.pp}</span>
          </span>
        </div>
      </div>
      <MoveMetaComponent
        meta={this.meta}
        open={this.state.open}
      />
    </div>
  }
}
