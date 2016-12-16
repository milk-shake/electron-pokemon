import Model from "../lib/model";

import Encounter from "./encounter.model";

export default class Version extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  encounter() {
    return this.has(Encounter, 'version_id', 'id');
  }
}

Version.prototype.table = 'versions';
