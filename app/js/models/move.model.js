import Model from "../lib/model";

import MoveName from "./moveName.model";
import Type from "./type.model";

export default class Move extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

  names() {
    return this.has(MoveName, 'move_id', 'id');
  }

  types() {
    return this.has(Type, 'id', 'type_id');
  }
}

Move.prototype.table = 'moves';
