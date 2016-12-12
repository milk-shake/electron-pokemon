import Model from "../lib/model";

export default class NatureName extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

}

NatureName.prototype.table = 'nature_names';
