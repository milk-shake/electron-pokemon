import Model from "../lib/model";

import EncounterMethod from "./encounterMethod.model";
import Language from "./language.model";

export default class EncounterMethodProse extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  encounterMethod() {
    return this.has(EncounterMethod, 'id', 'encounter_method_id');
  }

  language() {
    return this.has(Language, 'id', 'local_language_id');
  }

}

EncounterMethodProse.prototype.table = 'encounter_method_prose';
