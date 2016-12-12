import Model from "../lib/model";

export default class AbilityProse extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

}

AbilityProse.prototype.table = 'ability_prose';
