import Model from "../lib/model";

export default class PokemonMoveMethodProse extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

}

PokemonMoveMethodProse.prototype.table = 'pokemon_move_method_prose';
