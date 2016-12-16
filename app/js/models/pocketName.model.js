import Model from "../lib/model";

import Pocket from "./pocket.model";
import Language from "./language.model";

export default class PocketName extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  pocket() {
    return this.has(Pocket, 'id', 'item_pocket_id');
  }

  language() {
    return this.has(Language, 'id', 'local_language_id');
  }

}

PocketName.prototype.table = 'item_pocket_names';
