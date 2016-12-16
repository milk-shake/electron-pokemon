import Model from "../lib/model";

import Item from "./item.model";
import BerryFirmness from "./berryFirmness.model";
import BerryFlavor from "./berryFlavor.model";

export default class Berry extends Model {

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

  berryFirmness() {
    return this.has(BerryFirmness, 'firmness_id', 'id');
  }

  berryFlavor() {
    return this.has(BerryFlavor, 'berry_id', 'id');
  }


}

Berry.prototype.table = 'berries';
