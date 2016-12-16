import Model from "../lib/model";

import Berry from "./berry.model";
import ContestType from "./contestType.model";

export default class BerryFlavor extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  berry() {
    return this.has(Berry, 'id', 'berry_id');
  }

  contestType() {
    return this.has(ContestType, 'id', 'contest_type_id');
  }


}

BerryFlavor.prototype.table = 'berry_flavors';
