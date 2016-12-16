import Model from "../lib/model";

import Item from "./item.model";
import Language from "./language.model";

export default class ItemProse extends Model {

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

  language() {
    return this.has(Language, 'id', 'local_language_id');
  }

}

ItemProse.prototype.table = 'item_prose';
