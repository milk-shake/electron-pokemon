import Model from "../lib/model";
import NatureName from "./natureName.model";

export default class Nature extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

  names() {
    return this.has(NatureName, 'nature_id', 'id');
  }

}

Nature.prototype.table = 'natures';
