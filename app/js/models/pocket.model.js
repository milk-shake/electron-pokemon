import Model from "../lib/model";

import ItemCategory from "./itemCategory.model";
import PocketName from "./pocketName.model";

export default class Pocket extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  itemCategory() {
    return this.has(ItemCategory, 'pocket_id', 'id');
  }

  name() {
    return this.has(PocketName, 'item_pocket_id', 'id');
  }

}

Pocket.prototype.table = 'item_pockets';
