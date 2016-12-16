import Model from "../lib/model";

export default class NatureName extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

}

NatureName.prototype.table = 'nature_names';
