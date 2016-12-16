import Model from "../lib/model";

import ContestType from "./contestType.model";
import Language from "./language.model";

export default class ContestTypeName extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  contestType() {
    return this.has(ContestType, 'id', 'contest_type_id');
  }

  language() {
    return this.has(Language, 'id', 'local_language_id');
  }

}

ContestTypeName.prototype.table = 'contest_type_names';
