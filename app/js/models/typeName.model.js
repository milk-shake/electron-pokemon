import Model from "../lib/model";

export default class TypeName extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

}

TypeName.prototype.table = 'type_names';