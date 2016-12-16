import Model from "../lib/model";

export default class Machine extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }
}

Machine.prototype.table = 'machines';
