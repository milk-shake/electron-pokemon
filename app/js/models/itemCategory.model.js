import Model from "../lib/model";

import Pocket from "./pocket.model";
import ItemCategoryProse from "./itemCategoryProse.model";
import Item from "./item.model";

export default class ItemCategory extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  pocket() {
    return this.has(Pocket, 'id', 'pocket_id');
  }

  prose() {
    return this.has(ItemCategoryProse, 'item_category_id', 'id');
  }

  item() {
    return this.has(Item, 'category_id', 'id');
  }

}

ItemCategory.prototype.table = 'item_categories';
