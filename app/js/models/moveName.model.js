import Model from "../lib/model";

export default class MoveName extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }
}

MoveName.prototype.table = 'move_names';
