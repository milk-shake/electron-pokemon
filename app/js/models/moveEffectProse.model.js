import Model from "../lib/model";

export default class MoveEffectProse extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }
}

MoveEffectProse.prototype.table = 'move_effect_prose';
