import Model from "../lib/model";

export default class Gender extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

}

Gender.prototype.table = 'genders';
