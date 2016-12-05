import React from 'react';
import ReactDOM from 'react-dom';

import TypeComponent from "../type/type.component";
import SpriteComponent from "./trainer-pokemon-sprite.component";
import GenderComponent from "./trainer-pokemon-gender.component";
import BoxComponent from "./trainer-pokemon-box.component";

export default class MetaComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return <div className="trainer-pokemon-meta">
        <div className="trainer-pokemon-meta__meta-wrapper">
          <SpriteComponent
            gender={this.props.gender}
            sprites={this.props.sprite}
            shiny={this.props.shiny}
          />
          <h1 className="trainer-pokemon-meta__pokemon-name">{this.props.nickName}</h1>
          <div className="trainer-pokemon-meta__box">
            <BoxComponent box={this.props.box} />
          </div>
          <div className="trainer-pokemon-meta__gender">
            <GenderComponent gender={this.props.gender} />
          </div>
          <h2 className="trainer-pokemon-meta__pokemon-species">{this.props.species}</h2>
          <span className="trainer-pokemon-meta__types">
            {Object.keys(this.props.types).map(function(type) {
              return <TypeComponent
                type={this.props.types[type]}
                key={this.props.types[type].name}
              />
            }, this)}
          </span>
          <div className="trainer-pokemon-stats__stat trainer-pokemon-stats__health">
            <span className="trainer-pokemon-stats__health-bar"></span>
            <span className="trainer-pokemon-stats__stat-value">{this.props.hp.value}/{this.props.hp.value}</span>
          </div>
        </div>
        <div className="trainer-pokemon-meta__trainer-wrapper">
          <div className="trainer-pokemon-meta__trainer">
            <h1 className="trainer-pokemon-meta__trainer-name">{this.props.trainerName}</h1>
            <h2 className="trainer-pokemon-meta__ot-name">{this.props.ot}</h2>
            <span className="trainer-pokemon-meta__date-met">{this.props.dateMet}</span>
          </div>
        </div>
      </div>
  }
}
