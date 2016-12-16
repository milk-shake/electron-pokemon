import Model from "../lib/model";

import ItemFlagMap from "./itemFlagMap.model";
import ItemFlagProse from "./itemFlagProse.model";

export default class ItemFlag extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  itemFlagMap() {
    return this.has(ItemFlagMap, 'item_flag_id', 'id');
  }

  prose() {
    return this.has(ItemFlagProse, 'item_flag_id', 'id');
  }

}

ItemFlag.prototype.table = 'item_flags';
