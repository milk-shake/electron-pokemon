import Model from "../lib/model";

export default class Box extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

}

Box.prototype.table = 'boxes';
