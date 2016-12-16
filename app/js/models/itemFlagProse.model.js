import Model from "../lib/model";

import ItemFlag from "./itemFlag.model";

export default class ItemFlagProse extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  itemFlag() {
    return this.has(Item.flag, 'id', 'item_flag_id');
  }

}

ItemFlagProse.prototype.table = 'item_flag_prose';
