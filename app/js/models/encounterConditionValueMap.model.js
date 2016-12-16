import Model from "../lib/model";

import Encounter from "./encounter.model";
import EncounterConditionValue from "./encounterConditionValue.model";

export default class EncounterConditionValueMap extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  encounter() {
    return this.has(Encounter, 'id', 'encounter_id');
  }

  encounterConditionValue() {
    return this.has(EncounterConditionValue, 'id', 'encounter_condition_value_id');
  }

}

EncounterConditionValueMap.prototype.table = 'encounder_condition_value_map';
