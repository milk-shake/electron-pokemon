import Model from "../lib/model";

import Encounter from "./encounter.model";

export default class LocationArea extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  encounter() {
    return this.has(Encounter, 'location_area_id', 'id');
  }

}

LocationArea.prototype.table = 'location_areas';
