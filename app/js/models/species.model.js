import Model from "../lib/model";
import SpeciesType from "./speciesType.model";
import SpeciesName from "./speciesName.model";

export default class Species extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {
    super(options);
  }

  types() {
    return this.has(SpeciesType, 'pokemon_id', 'id');
  }

  names() {
    return this.has(SpeciesName, 'pokemon_species_id', 'id');
  }


}

Species.prototype.table = 'pokemon_species';
