import Model from "../lib/model";
import Move from "./move.model";

export default class ContestCombo extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  firstMove() {
    return this.has(Move, 'id', 'first_move_id');
  }

  secondMove() {
    return this.has(Move, 'id', 'second_move_id');
  }

}

ContestCombo.prototype.table = 'contest_combos';
