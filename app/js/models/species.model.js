import Model from "../lib/model";
import Type from "./type.model";

export default class Species extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {
    super(options);
  }


}

Species.prototype.table = 'pokemon_species';
