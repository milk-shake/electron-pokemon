import Model from "../lib/model";

export default class PokemonEggGroup extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {
    super(options);
  }


}

PokemonEggGroup.prototype.table = 'pokemon_egg_groups';
