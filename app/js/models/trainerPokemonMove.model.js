import Model from "../lib/model";
import Move from "./move.model";

export default class TrainerPokemonMove extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

  moves() {
    return this.has(Move, 'id', 'move_id');
  }

}

TrainerPokemonMove.prototype.table = 'trainer_pokemon_moves';
