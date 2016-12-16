import Model from "../lib/model";

import ItemCategory from "./itemCategory.model";
import Language from "./language.model";

export default class ItemCategoryProse extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  itemCategory() {
    return this.has(ItemCategory, 'id', 'item_category_id');
  }

  language() {
    return this.has(Language, 'id', 'local_language_id');
  }

}

ItemCategoryProse.prototype.table = 'item_category_prose';
