import Model from "../lib/model";

import Generation from "./generation.model";

export default class Region extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  generation() {
    return this.has(Generation, 'main_region_id', 'id');
  }

}

Region.prototype.table = 'regions';
