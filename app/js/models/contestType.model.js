import Model from "../lib/model";

import BerryFlavor from "./berryFlavor.model";
import ContestTypeName from "./contestTypeName.model";

export default class ContestType extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  berryFlavor() {
    return this.has(BerryFlavor, 'contest_type_id', 'id');
  }

  contestTypeName() {
    return this.has(ContestTypeName, 'contest_id', 'id');
  }

}

ContestType.prototype.table = 'contest_types';
