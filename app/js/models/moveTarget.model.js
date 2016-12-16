import Model from "../lib/model";

import MoveTargetProse from "./moveTargetProse.model";

export default class MoveTarget extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  prose() {
    return this.has(MoveTargetProse, 'move_target_id', 'id');
  }

}

MoveTarget.prototype.table = 'move_targets';
