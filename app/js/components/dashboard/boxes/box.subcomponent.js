import React from 'react';
import ReactDOM from 'react-dom';

import BoxItem from "./box-item.subcomponent";

export default class Box extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      on: false
    }
  }

  toggleOn() {
    this.setState({
      on: !this.state.on
    });
  }

  render() {
    return (
      <div className={'box' + ((this.state.on) ? ' on' : '') }>
        <h1 className="box__header" onClick={this.toggleOn.bind(this)}>Box 1</h1>
        <div className="box__contents">
          {this.props.pokemon.map(function(pokemon) {
            return (
              <BoxItem
                handleAddToSpotLight={this.props.handleAddToSpotLight}
                key={pokemon.id}
                pokemon={pokemon}
              />
            )

          }, this)}
        </div>
      </div>
    )
  }
}
