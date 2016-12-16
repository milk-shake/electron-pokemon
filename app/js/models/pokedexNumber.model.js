import Model from "../lib/model";

export default class PokedexNumber extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {
    super(options);
  }


}

PokedexNumber.prototype.table = 'pokemon_dex_numbers';
