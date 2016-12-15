import Model from "../lib/model";

export default class Trainer extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

}

Trainer.prototype.table = 'trainer';
