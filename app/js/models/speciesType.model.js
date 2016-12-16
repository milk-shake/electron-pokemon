import Model from "../lib/model";
import Type from "./type.model";

export default class SpeciesType extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {
    super(options);
  }

  types() {
    return this.has(Type, 'id', 'type_id')
  }


}

SpeciesType.prototype.table = 'pokemon_types';
