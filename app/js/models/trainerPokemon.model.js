import Model from "../lib/model";
import Ability from "./ability.model";
import Characteristic from "./characteristic.model";
import Nature from "./nature.model";
import Species from "./species.model";
import TrainerPokemonMove from "./trainerPokemonMove.model";

export default class TrainerPokemon extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'trainer_pokemon'
  }) {

    super(options);
  }

  abilities() {
    return this.has(Ability, 'id', 'ability_id');
  }

  characteristics() {
    return this.has(Characteristic, 'id', 'characteristic_id');
  }

  natures() {
    return this.has(Nature, 'id', 'nature_id');
  }

  species() {
    return this.has(Species, 'id', 'species_id');
  }

  trainerPokemonMoves() {
    return this.has(TrainerPokemonMove, 'trainer_pokemon_id', 'id');
  }

}

TrainerPokemon.prototype.table = 'trainer_pokemon';
