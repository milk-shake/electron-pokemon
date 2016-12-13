import Model from "../lib/model";

import MoveName from "./moveName.model";

export default class Move extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

  names() {
    return this.has(Move, 'move_id', 'id');
  }
}

Move.prototype.table = 'moves';
