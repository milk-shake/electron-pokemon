import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import TypeComponent from "../type/type.component";


@connect((store) => {
  return {
    types: store.trainerPokemonReducer.types
  }
})
export default class TypesComponent extends React.Component {
  constructor(props) {
    super(props);

  }
  
  renderTypes() {
    if(this.props.types.length) {
      return (
          <div className="trainer-pokemon-meta__types">
            {
              this.props.types.map(function(type) {
                return <TypeComponent
                          name={type.name}
                          key={type.name}
                        />
              })
            }
          </div>
      )
    }
    else {
      return null;
    }
  }

  render() {
    return this.renderTypes()
  }
}
