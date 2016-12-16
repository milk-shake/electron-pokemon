import Model from "../lib/model";

import Item from "./item.model";
import Generation from "./generation.model";

export default class ItemGameIndex extends Model {

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

  generation() {
    return this.has(Generation, 'id', 'generation_id');
  }

}

ItemGameIndex.prototype.table = 'item_game_indices';
