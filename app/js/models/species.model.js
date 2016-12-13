import Model from "../lib/model";
import SpeciesType from "./speciesType.model";

export default class Species extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {
    super(options);
  }

  types() {
    return this.has(SpeciesType, 'pokemon_id', 'id');
  }


}

Species.prototype.table = 'pokemon_species';
