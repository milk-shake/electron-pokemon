import Model from "../lib/model";
import Move from "./move.model";

export default class TrainerPokemonMove extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'trainer_pokemon'
  }) {

    super(options);
  }

  moves() {
    return this.has(Move, 'id', 'move_id');
  }

}

TrainerPokemonMove.prototype.table = 'trainer_pokemon_moves';
