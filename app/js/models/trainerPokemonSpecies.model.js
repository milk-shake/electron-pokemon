import Model from "../lib/model";
import Species from "./species.model";

export default class TrainerPokemonSpecies extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

  species() {
    return this.has(Species, 'id', 'species_id');
  }

}

TrainerPokemonSpecies.prototype.table = 'trainer_pokemon_species';
