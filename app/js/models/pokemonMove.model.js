import Model from "../lib/model";
import Move from "../move";

export default class PokemonMove extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  moves() {
    return this.has(Move, 'id', 'move_id');
  }

  methods() {
    return this.has(PokemonMoveMethod, 'id', 'pokemon_move_method_id');
  }
}

PokemonMove.prototype.table = 'pokemon_moves';
