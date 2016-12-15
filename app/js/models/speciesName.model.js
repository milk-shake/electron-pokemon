import Model from "../lib/model";

export default class SpeciesName extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {
    super(options);
  }


}

SpeciesName.prototype.table = 'pokemon_species_names';
