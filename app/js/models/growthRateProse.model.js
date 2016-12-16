import Model from "../lib/model";

import GrowthRate from "./growthRate.model";
import Language from "./language.model";

export default class GrowthRateProse extends Model {

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

  language() {
    return this.has(Language, 'id', 'local_language_id');
  }

}

GrowthRateProse.prototype.table = 'growth_rate_prose';
