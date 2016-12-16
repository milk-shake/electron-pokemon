import Model from "../lib/model";

import AbilityFlavorText from "./abilityFlavorText.model";
import EncounterSlot from "./encounterSlot.model";
import ItemFlavorText from "./itemFlavorText.model";

export default class VersionGroup extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  abilityFlavorText() {
    return this.has(AbilityFlavorText, 'version_group_id', 'id');
  }

  encounterSlot() {
    return this.has(EncounterSlot, 'version_group_id', 'id');
  }

  itemFlavorText() {
    return this.has(ItemFlavorText, 'version_group_id', 'id');
  }
}

VersionGroup.prototype.table = 'versions';
