import Model from "../lib/model";

import Language from "./language.model";

export default class LanguageName extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  language() {
    return this.has(Language, 'id', 'language_id');
  }

  localLanguage() {
    return this.has(Language, 'id', 'local_language_id');
  }

}

LanguageName.prototype.table = 'language_names';
