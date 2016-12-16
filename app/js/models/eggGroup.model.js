import Model from "../lib/model";

import EggGroupProse from "./eggGroupProse.model";

export default class EggGroup extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  prose() {
    return this.has(EggGroupProse, 'egg_group_id', 'id');
  }

}

EggGroup.prototype.table = 'egg_groups';
