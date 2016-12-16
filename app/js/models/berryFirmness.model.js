import Model from "../lib/model";

import Berry from "./berry.model";
import BerryFirmnessName from "./berryFirmnessName.model";

export default class BerryFirmness extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  berry() {
    return this.has(Berry, 'firmness_id', 'id');
  }

  name() {
    return this.has(BerryFirmnessName, 'berry_firmness_id', 'id');
  }


}

BerryFirmness.prototype.table = 'berry_firmness';
