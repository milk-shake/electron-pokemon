import Model from "../lib/model";

import EncounterConditionValue from "./encounterConditionValue.model";
import Language from "./language.model";

export default class EncounterConditionValueProse extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  encounterConditionValue() {
    return this.has(EncounterConditionValue, 'id', 'encounter_condition_value_id');
  }

  language() {
    return this.has(Language, 'id', 'local_language_id');
  }

}

EncounterConditionValueProse.prototype.table = 'encounter_condition_value_prose';
