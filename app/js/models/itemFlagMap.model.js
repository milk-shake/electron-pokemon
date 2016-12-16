import Model from "../lib/model";

import Item from "./item.model";
import ItemFlag from "./itemFlag.model";

export default class ItemFlagMap extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  item() {
    return this.has(Item, 'id', 'item_id');
  }

  itemFlag() {
    return this.has(ItemFlag, 'id', 'item_flag_id');
  }

}

ItemFlagMap.prototype.table = 'item_flag_map';
