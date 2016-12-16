import Model from "../lib/model";
import PokemonMoveMethodProse from "./PokemonMoveMethodProse";

export default class PokemonMoveMethod extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  prose() {
    return this.has(Move, 'pokemon_move_method_id', 'id');
  }
}

PokemonMoveMethod.prototype.table = 'pokemon_move_methods';
