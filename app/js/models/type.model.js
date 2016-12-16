import Model from "../lib/model";
import TypeName from "./typeName.model";
import TypeEfficacy from "./typeEfficacy.model";

export default class Type extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  names() {
    return this.has(TypeName, 'type_id', 'id');
  }

  efficacies() {
    return this.has(TypeEfficacy, 'damage_type_id', 'id');
  }

}

Type.prototype.table = 'types';
