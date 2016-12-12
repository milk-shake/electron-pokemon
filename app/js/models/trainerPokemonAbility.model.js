import Model from "../lib/model";
import Ability from "./ability.model";

export default class TrainerPokemonAbility extends Model {

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

TrainerPokemonAbility.prototype.table = 'trainer_pokemon_abilities';
