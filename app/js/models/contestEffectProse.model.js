import Model from "../lib/model";
import ContestEffect from "./contestEffect.model";
import Language from "./language.model";

export default class ContestEffectProse extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  contestEffect() {
    return this.has(ContestEffect, 'id', 'contest_effect_id');
  }

  language() {
    return this.has(Language, 'id', 'local_language_id');
  }

}

ContestEffectProse.prototype.table = 'contest_effect_prose';
