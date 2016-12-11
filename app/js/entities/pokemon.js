import AbilityController from "../controllers/abilityController";
import MoveController from "../controllers/moveController"
import TypeController from "../controllers/typeController";
import SpeciesController from "../controllers/speciesController";

const assetPath = "./img/sprites/pokemon/";


export default class Pokemon {

  constructor(options) {

    let _id = null;
    let _height = null;
    let _weight = null;
    let _baseExperience = null;
    let _abilities = null;
    let _availableMoves = null;
    let _sprite = null;
    let _evolution = null;


    //internal
    let _speciesId = null;

    Object.defineProperty(this, 'id', {
      enumarable: true,
      get() {
        return _id;
      }
    });

    Object.defineProperty(this, 'height', {
      enumarable: true,
      get() {
        return _height;
      }
    });

    Object.defineProperty(this, 'weight', {
      enumarable: true,
      get() {
        return _weight;
      }
    });

    Object.defineProperty(this, 'baseExperience', {
      enumarable: true,
      get() {
        return _baseExperience;
      }
    });

    Object.defineProperty(this, 'abilities', {
      enumarable: true,
      get() {
        if(!_abilities) {
          _abilities = AbilityController.getForPokemonId(this.id);
        }
        return _abilities;
      }
    });

    Object.defineProperty(this, 'availableMoves', {
      enumarable: true,
      get() {
        if(!_availableMoves) {
          _availableMoves = MoveController.getForPokemonId(this.id);
        }

        return _availableMoves;
      }
    });

    Object.defineProperty(this, 'sprite', {
      enumarable: true,
      get() {
        if(!_sprite) {
          _sprite = {};
          _sprite.normal = {};
          _sprite.normal.male = {};
          _sprite.normal.female = {};
          _sprite.shiny = {};
          _sprite.shiny.male = {};
          _sprite.shiny.female = {};
          _sprite.normal.male.front = assetPath + this.id + ".png";
          _sprite.normal.female.front = assetPath + "female/" + this.id + ".png";
          _sprite.normal.male.back = assetPath + "back/" + this.id + ".png";
          _sprite.normal.female.back = assetPath + "back/female/" + this.id + ".png";
          _sprite.shiny.male.front = assetPath + "shiny/" + this.id + ".png";
          _sprite.shiny.female.front = assetPath + "shiny/female/" + this.id + ".png";
          _sprite.shiny.male.back = assetPath + "back/shiny/" + this.id + ".png";
          _sprite.shiny.female.back = assetPath + "back/shiny/female/" + this.id + ".png";
        }

        return _sprite;

      }

    });

    Object.defineProperty(this, 'speciesId', {
      enumarable: true,
      get() {
        return _speciesId
      }
    });

    _id = parseInt(options.id);
    _height = parseInt(options.height);
    _weight = parseInt(options.weight);
    _baseExperience = parseInt(options.base_experience) || 0;
    _speciesId = parseInt(options.species_id) || null;

  }
}
