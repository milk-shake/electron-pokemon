import Model from "../lib/model";

import ItemFlingEffectProse from "./itemFlingEffectProse.model";
import Item from "./item.model";

export default class ItemFlingEffect extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  prose() {
    return this.has(ItemFlingEffectProse, 'item_fling_effect_id', 'id');
  }

  item() {
    return this.has(Item, 'item_fling_effect_id', 'id');
  }

}

ItemFlingEffect.prototype.table = 'item_fling_effects';
