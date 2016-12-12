import Model from "../lib/model";

export default class Move extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }
}

Move.prototype.table = 'moves';
