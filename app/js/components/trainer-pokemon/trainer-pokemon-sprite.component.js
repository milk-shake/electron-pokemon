import React from 'react';
import ReactDOM from 'react-dom';

export default class SpriteComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch(this.props.gender.id) {
      case 1:
        if(this.props.shiny) {
          return <span className="trainer-pokemon-meta__pokemon-sprite" style={{backgroundImage: "url(" + this.props.sprites.shiny.female.front + ")"}}></span>
        }
        else {
          return <span className="trainer-pokemon-meta__pokemon-sprite" style={{backgroundImage: "url(" + this.props.sprites.normal.female.front + ")"}}></span>
        }
        break;
      case 2:
      case 3:
        if(this.props.shiny) {
          return <span className="trainer-pokemon-meta__pokemon-sprite" style={{backgroundImage: "url(" + this.props.sprites.shiny.male.front + ")"}}></span>
        }
        else {
          return <span className="trainer-pokemon-meta__pokemon-sprite" style={{backgroundImage: "url(" + this.props.sprites.normal.male.front + ")"}}></span>
        }
      default:
        break;
    }
  }
}
