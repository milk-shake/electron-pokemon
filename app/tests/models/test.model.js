import Model from "../../js/lib/model";

export default class Test extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'test'
  }) {

    super(options);
  }

  test() {
    return this.has(Model, 'id', 'model_id');
  }
}

Test.prototype.table = 'test';
