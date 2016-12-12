import Model from "../lib/model";
import Nature from "./nature.model";

export default class TrainerPokemonNature extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

  natures() {
    return this.has(Nature, 'id', 'nature_id');
  }

}

TrainerPokemonNature.prototype.table = 'trainer_pokemon_natures';
