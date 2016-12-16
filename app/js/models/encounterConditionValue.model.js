import Model from "../lib/model";

import EncounterConditionValueMap from "./encounterConditionValueMap.model";
import EncounterConditionValueProse from "./encounterConditionValueProse.model";
import EncounterCondition from "./encounterCondition.model";

export default class EncounterConditionValue extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  encounterConditionValueMap() {
    return this.has(EncounterConditionValueMap, 'encounter_condition_value_id', 'id');
  }

  prose() {
    return this.has(EncounterConditionValueProse, 'encounter_condition_value_id', 'id');
  }

  encounterCondition() {
    return this.has(encounterCondition, 'id', 'encounter_condition_id');
  }

}

EncounterConditionValue.prototype.table = 'encounter_condition_values';
