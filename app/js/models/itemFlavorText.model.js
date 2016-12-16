import Model from "../lib/model";

import Item from "./item.model";
import VersionGroup from "./versionGroup.model";
import Language from "./language.model";

export default class ItemFlavorText extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  item() {
    return this.has(Item, 'id', 'item_id');
  }

  versionGroup() {
    return this.has(VersionGroup, 'id', 'version_group_id');
  }

  language() {
    return this.has(Language, 'id', 'language_id');
  }

}

ItemFlavorText.prototype.table = 'item_flavor_text';
