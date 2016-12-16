import Model from "../lib/model";

export default class Gender extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

}

Gender.prototype.table = 'genders';
