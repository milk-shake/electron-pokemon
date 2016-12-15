import Model from "../lib/model";

import Encounter from "./encounter.model";

export default class LocationArea extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

  encounter() {
    return this.has(Encounter, 'location_area_id', 'id');
  }

}

LocationAream.prototype.table = 'location_areas';
