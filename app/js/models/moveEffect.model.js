import Model from "../lib/model";
import MoveEffectProse from "./moveEffectProse.model";

export default class MoveEffect extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  prose() {
    return this.has(MoveEffectProse, 'move_effect_id', 'id');
  }
}

MoveEffect.prototype.table = 'move_effect';
