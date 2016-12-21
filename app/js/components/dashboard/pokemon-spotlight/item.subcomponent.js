import React from 'react';
import ReactDOM from 'react-dom';

import ItemInfo from "./item-info.subcomponent";
import ItemHealth from "./item-health.subcomponent";
import ItemLevel from "./item-level.subcomponent";
import ItemStatList from "./item-stat-list.subcomponent";

//TODO make itemmovelist
import ItemMove from "./item-move.subcomponent";

import ItemTrait from "./item-trait.subcomponent";

export default class Item extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getAllAbilities(this.props.pokemon.species_id);
    this.props.getAllNatures();
    this.props.getAllCharacteristics();
  }
  //TODO move this up two levels (into dashboard) and make into an action
  onEditClick(o) {
    let options = {
      type: "FILTER",
      props: {
        title: o.title,
        placeholder: `Filter on ${o.title}`
      }
    }
    switch(o.type) {
      case "ABILITIES": {
        options.props.results = this.props.abilities[this.props.pokemon.species_id].map(function(ability) {
          let o = {
            filterOn: ability.abilities[0].ability_names[0].name,
            object: ability
          }
          return o;
        });
        options.props.onResultsClick = function(ability) {
          this.props.updateTrait('abilities', this.props.pokemon, ability[0].abilities[0]);
        }.bind(this);
        break;
      }
      case "NATURES": {
        options.props.results = this.props.natures.map(function(nature) {
          let o = {
            filterOn: nature.nature_names[0].name,
            object: nature
          }
          return o;
        });
        options.props.onResultsClick = function(nature) {
          this.props.updateTrait('natures', this.props.pokemon, nature[0]);
        }.bind(this);
        break;
      }
      case "CHARACTERISTICS": {
        options.props.results = this.props.characteristics.map(function(characteristic) {
          let o = {
            filterOn: characteristic.characteristic_text[0].message,
            object: characteristic
          }
          return o;
        });
        options.props.onResultsClick = function(characteristic) {
          this.props.updateTrait('characteristics', this.props.pokemon, characteristic[0]);
        }.bind(this);
        break;
      }
      case "NICKNAME": {
        options = {
          type: "INPUT",
          props: {
            title: o.title,
            placeholder: `Enter a new nick name`,
            onDone: function(inputVal) {
              this.props.updateNickname(this.props.pokemon, inputVal);
            }.bind(this)
          }
        }
        break;
      }
    }
    this.props.showModal(options);
  }

  toggleMinimized(e, name) {
    e.target.classList.toggle('pane__button--minimize');
    e.target.classList.toggle('pane__button--maximize');
    e.target.classList.toggle('ion-chevron-left');
    e.target.classList.toggle('ion-chevron-right');
    e.target.parentNode.parentNode.parentNode.classList.toggle('minimized');
  }

  render() {
    return (
        <div className="pokemon-spotlight__list-item">
          <span className="pane__header">
            <span className="pane__header-text">{this.props.pokemon.nick_name}</span>
            <span className="ion ion-edit" onClick={() => this.onEditClick({type: "NICKNAME", title: "Change nickname"})}></span>
            <span className="pane__buttons">
              <span className="pane__button pane__button--minimize ion ion-chevron-left" onClick={(e) => this.toggleMinimized(e, 'spotlight')}></span>
              <span onClick={() => this.props.handleRemoveFromSpotLight(this.props.pokemon)} className="pane__button pane__button--close ion ion-close-round"></span>
            </span>
          </span>
          <div className="pokemon-spotlight__item">

            <ItemInfo
              types={this.props.pokemon.pokemon_species[0].pokemon_types}
              species_id={this.props.pokemon.species_id}
              species_name={this.props.pokemon.pokemon_species[0].pokemon_species_names[0].name}
              species_genus={this.props.pokemon.pokemon_species[0].pokemon_species_names[0].genus}
              // helditem={this.props.pokemon.helditem}
            />
            <ItemHealth pokemon={this.props.pokemon}
              hp={this.props.pokemon.hp}
              natureStatIds={{decreased: this.props.pokemon.natures[0].decreased_stat_id, increased: this.props.pokemon.natures[0].increased_stat_id}}
              characteristicStatId={this.props.pokemon.characteristics[0].stat_id}
            />
            <ItemLevel
              level={this.props.pokemon.level}
            />
            <ItemStatList
              attack={this.props.pokemon.attack}
              defence={this.props.pokemon.defence}
              sp_attack={this.props.pokemon.sp_attack}
              sp_defence={this.props.pokemon.sp_defence}
              evasion={this.props.pokemon.evasion}
              speed={this.props.pokemon.speed}
              natureStatIds={{decreased: this.props.pokemon.natures[0].decreased_stat_id, increased: this.props.pokemon.natures[0].increased_stat_id}}
              characteristicStatId={this.props.pokemon.characteristics[0].stat_id}
            />
            <ItemTrait
              name={this.props.pokemon.abilities[0].ability_names[0].name}
              traitName="Abilities"
              onEditClick={this.onEditClick.bind(this)}
            />
            <ItemTrait
              name={this.props.pokemon.natures[0].nature_names[0].name}
              traitName="Natures"
              onEditClick={this.onEditClick.bind(this)}
            />
            <ItemTrait
              name={this.props.pokemon.characteristics[0].characteristic_text[0].message}
              traitName="Characteristics"
              onEditClick={this.onEditClick.bind(this)}
            />
            <div className="pokemon-spotlight__moves">
              <h1 className="pokemon-spotlight__section-header">Moves</h1>
              <ItemMove moves={this.props.pokemon.trainer_pokemon_moves}/>
            </div>
          </div>
          <span className="pane__footer"></span>
        </div>
    )
  }
}
