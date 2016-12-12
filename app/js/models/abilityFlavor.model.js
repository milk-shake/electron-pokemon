import Model from "../lib/model";

export default class AbilityFlavor extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

}

AbilityFlavor.prototype.table = 'ability_flavor_text';
