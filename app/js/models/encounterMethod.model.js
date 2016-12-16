import Model from "../lib/model";

import EncounterMethodProse from "./encounterMethodProse.model";
import EncounterSlot from "./encounterSlot.model";

export default class EncounterMethod extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  prose() {
    return this.has(EncounterMethodProse, 'encounter_method_id', 'id');
  }

  encounterSlot() {
    return this.has(EncounterSlot, 'encounter_method_id', 'id');
  }

}

EncounterMethod.prototype.table = 'encounter_method';
