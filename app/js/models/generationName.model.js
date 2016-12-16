import Model from "../lib/model";

import Generation from "./generation.model";
import Language from "./language.model";

export default class GenerationName extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  generation() {
    return this.has(Generation, 'id', 'generation_id');
  }

  language() {
    return this.has(Language, 'id', 'local_language_id');
  }

}

GenerationName.prototype.table = 'generation_names';
