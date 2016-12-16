import Model from "../lib/model";
import Type from "./type.model";

export default class PokemonType extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  types() {
    return this.has(Type, 'id', 'type_id');
  }
}

PokemonType.prototype.table = 'pokemon_types';
