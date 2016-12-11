import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

import LoadingComponent from "../loading/loading.component";
import TypeComponent from "../type/type.component";
import SpriteComponent from "./trainer-pokemon-sprite.component";
import GenderComponent from "./trainer-pokemon-gender.component";
import SpeciesComponent from "./trainer-pokemon-species.component";
import TypesComponent from "./trainer-pokemon-types.component";


import BoxComponent from "../trainer-pokemon/trainer-pokemon-box.component";

import {getBoxForPokemonId, getGenderForPokemonById, getSpeciesForPokemonById, getTypesForSpeciesId} from "../../actions/trainerPokemonActions";

@connect((store) => {
  return {
    pokemon: store.trainerPokemonReducer.pokemon[0],
    box: store.trainerPokemonReducer.box,
    gender: store.trainerPokemonReducer.gender,
    species: store.trainerPokemonReducer.species,
    types: store.trainerPokemonReducer.types
  }
})
export default class MetaComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.dispatch(getBoxForPokemonId(this.props.pokemon.trainerPokemonId));
    this.props.dispatch(getGenderForPokemonById(this.props.pokemon.genderId));
    this.props.dispatch(getSpeciesForPokemonById(this.props.pokemon.speciesId));
    this.props.dispatch(getTypesForSpeciesId(this.props.pokemon.speciesId));
  }

  renderNickName() {
    if(this.props.pokemon) {
      return <h1 className="trainer-pokemon-meta__pokemon-name">{this.props.pokemon.nickName}</h1>
    }
    else {
      return <h1 className="trainer-pokemon-meta__pokemon-name"><LoadingComponent /></h1>
    }
  }

  renderBox() {
    if(this.props.box) {
      return <div className="trainer-pokemon-meta__box">
        <BoxComponent />
      </div>
    }
  }

  renderSprite() {
      if(this.props.pokemon && this.props.gender) {
        return <SpriteComponent/>
      }
  }

  renderGender() {
    if(this.props.gender) {
      return <div className="trainer-pokemon-meta__gender">
        <GenderComponent />
      </div>
    }
  }

  renderSpecies() {
    if(this.props.species) {
      return <SpeciesComponent />
    }
  }

  renderTypes() {
      if(this.props.types) {
        return <TypesComponent />
      }
  }

  renderHp() {
    if(this.props.pokemon) {
      return <div className="trainer-pokemon-stats__stat trainer-pokemon-stats__health">
        <span className="trainer-pokemon-stats__health-bar"></span>
        <span className="trainer-pokemon-stats__stat-value">{this.props.pokemon.hp}/{this.props.pokemon.hp}</span>
      </div>
    }
  }

  renderTrainerName() {
    if(this.props.pokemon) {
      return <h1 className="trainer-pokemon-meta__trainer-name">{this.props.pokemon.trainerName}</h1>
    }
  }

  renderOTTrainerName() {
    if(this.props.pokemon.oT) {
      return <h2 className="trainer-pokemon-meta__ot-name">{this.props.pokemon.oT}</h2>
    }
  }

  renderDateMet() {
    if(this.props.pokemon.dateMet) {
      return <span className="trainer-pokemon-meta__date-met">{this.props.pokemon.dateMet}</span>
    }
  }

  render() {
      return <div className="trainer-pokemon-meta">
        <div className="trainer-pokemon-meta__meta-wrapper">
          {this.renderSprite()}
          {this.renderNickName()}
          {this.renderBox()}
          {this.renderGender()}
          {this.renderSpecies()}
          {this.renderTypes()}
          {this.renderHp()}
        </div>
        <div className="trainer-pokemon-meta__trainer-wrapper">
          <div className="trainer-pokemon-meta__trainer">
            {this.renderTrainerName()}
            {this.renderOTTrainerName()}
            {this.renderDateMet()}
          </div>
        </div>
      </div>
  }
}
