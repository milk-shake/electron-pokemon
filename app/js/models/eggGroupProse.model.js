import Model from "../lib/model";

import EggGroup from "./eggGroup.model";
import Language from "./language.model";

export default class EggGroupProse extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  eggGroup() {
    return this.has(EggGroup, 'id', 'egg_group_id');
  }

  language() {
    return this.has(Language, 'id', 'local_language_id');
  }

}

EggGroupProse.prototype.table = 'egg_group_prose';
