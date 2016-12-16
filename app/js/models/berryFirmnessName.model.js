import Model from "../lib/model";

import BerryFirmness from "./berryFirmness.model";
import Language from "./language.model";

export default class BerryFirmnessName extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  berryFirmness() {
    return this.has(Berry, 'firmness_id', 'id');
  }

  language() {
    return this.has(Language, 'local_language_id', 'id');
  }


}

BerryFirmnessName.prototype.table = 'berry_firmness_names';
