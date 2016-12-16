import Model from "../lib/model";

import Item from "./item.model";
import Language from "./language.model";

export default class ItemName extends Model {

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

}

ItemName.prototype.table = 'item_name';
