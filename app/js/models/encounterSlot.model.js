import Model from "../lib/model";

import VersionGroup from "./versionGroup.model";
import EncounterMethod from "./encounterMethod.model";
import Encounter from "./encounter.model";

export default class EncounterSlot extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  versionGroup() {
    return this.has(Version, 'id', 'version_group_id');
  }

  encounterMethod() {
    return this.has(EncounterMethod, 'id', 'encounter_method_id');
  }

  encounter() {
    return this.has(Encounter, 'id', 'encounter_slot_id');
  }

}

EncounterSlot.prototype.table = 'encounter_slots';
