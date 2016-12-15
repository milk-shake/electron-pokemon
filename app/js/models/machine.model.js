import Model from "../lib/model";

export default class Machine extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }
}

Machine.prototype.table = 'machines';
