import Model from "../lib/model";

import EncounterConditionProse from "./encounterConditionProse.model";
import EncounterConditionValue from "./encounterConditionValue.model";

export default class EncounterCondition extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  prose() {
    return this.has(EncounterConditionProse, 'encounter_condition_id', 'id');
  }

  encounterConditionValue() {
    return this.has(EncounterConditionValue, 'encounter_condition_id', 'id');
  }

}

EncounterCondition.prototype.table = 'encounter_conditions';
