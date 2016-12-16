import Model from "../lib/model";

import Ability from "./ability.model";
import Language from "./language.model";
import VersionGroup from "./version.model";

export default class AbilityFlavorText extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  versionGroup() {
    return this.has(VersionGroup, 'id', 'version_group_id');
  }

  ability() {
    return this.has(Ability, 'id', 'ability_id');
  }

  language() {
    return this.has(Language, 'id', 'language_id');
  }

}

AbilityFlavorText.prototype.table = 'ability_flavor_text';
