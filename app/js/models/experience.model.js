import Model from "../lib/model";

import GrowthRate from "./growthRate.model";

export default class Experience extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  growthRate() {
    return this.has(GrowthRate, 'id', 'growth_rate_id');
  }

}

Experience.prototype.table = 'experience';
