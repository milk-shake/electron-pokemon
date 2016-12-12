import Model from "../lib/model";

export default class AbilityName extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

}

AbilityName.prototype.table = 'ability_names';
