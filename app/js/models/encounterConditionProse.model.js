import Model from "../lib/model";

import EncounterCondition from "./encounterCondition.model";
import Language from "./language.model";

export default class EncounterConditionProse extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  encounterCondition() {
    return this.has(EncounterCondition, 'id', 'encounter_condition_id');
  }

  language() {
    return this.has(Language, 'id', 'local_language_id');
  }

}

EncounterConditionProse.prototype.table = 'encounter_condition_prose';
