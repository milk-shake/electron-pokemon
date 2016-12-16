import Model from "../lib/model";

import Experience from "./experience.model";
import GrowthRateProse from "./growthRateProse.model";

export default class growthRate extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  experience() {
    return this.has(Experience, 'growth_rate_id', 'id');
  }

  prose() {
    return this.has(GrowthRateProse, 'growth_rate_id', 'id');
  }

}

growthRate.prototype.table = 'growthRates';
