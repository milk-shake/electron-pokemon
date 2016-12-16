import Model from "../lib/model";

export default class TypeEfficacy extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

}

TypeEfficacy.prototype.table = 'type_efficacy';
