import Model from "../lib/model";

import ItemFlingEffect from "./itemFlingEffect.model";
import Language from "./language.model";

export default class ItemFlingEffectProse extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  itemFlingEffect() {
    return this.has(ItemFlingEffect, 'id', 'item_fling_effect_id');
  }

  language() {
    return this.has(Language, 'id', 'local_language_id');
  }

}

ItemFlingEffectProse.prototype.table = 'item_fling_effect_prose';
