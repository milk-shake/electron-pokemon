import Model from "../lib/model";

import EncounterConditionValueMap from "./encounterConditionValueMap.model";
import Version from "./version.model";
import LocationArea from "./locationArea.model";
import EncounterSlot from "./encounterSlot.model";
import Pokemon from "./pokemon.model";

export default class Encounter extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  encounterConditionValueMap() {
    return this.has(EncounterConditionValueMap, 'encounter_id', 'id');
  }

  version() {
    return this.has(Version, 'id', 'version_id');
  }

  locationArea() {
    return this.has(LocationArea, 'id', 'location_area_id');
  }

  encounterSlot() {
    return this.has(EncounterSlot, 'id', 'encounter_slot_id');
  }

  pokemon() {
    return this.has(Pokemon, 'id', 'pokemon_id');
  }

}

Encounter.prototype.table = 'encounters';
