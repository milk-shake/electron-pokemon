import Model from "../lib/model";

import ContestEffectProse from "./contestEffectProse.model";

export default class ContestEffect extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  prose() {
    return this.has(ContestEffectProse, 'contest_effect_id', 'id');
  }

}

ContestEffect.prototype.table = 'contest_effects';
