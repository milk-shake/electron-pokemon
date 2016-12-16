import Model from "../lib/model";

export default class MoveTargetProse extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

}

MoveTargetProse.prototype.table = 'move_target_prose';
