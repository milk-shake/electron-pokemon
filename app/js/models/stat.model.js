import Model from "../lib/model";

import Characteristic from "./characteristic.model";

export default class Stat extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  characteristic() {
    return this.has(Characteristic, 'stat_id', 'id');
  }

}

Stat.prototype.table = 'stats';
