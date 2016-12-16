import Model from "../lib/model";

export default class PokemonEggGroup extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {
    super(options);
  }


}

PokemonEggGroup.prototype.table = 'pokemon_egg_groups';
