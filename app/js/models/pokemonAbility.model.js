import Model from "../lib/model";
import Ability from "./ability.model";

export default class PokemonAbility extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

  abilities() {
    return this.has(Ability, 'id', 'ability_id');
  }

}

PokemonAbility.prototype.table = 'pokemon_abilities';
