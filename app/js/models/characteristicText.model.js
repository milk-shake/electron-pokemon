import Model from "../lib/model";

import Characteristic from "./characteristic.model";
import Language from "./language.model";

export default class CharacteristicText extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  characteristic() {
    return this.has(Characteristic, 'id', 'characteristic_id');
  }

  language() {
    return this.has(Language, 'id', 'local_language_id');
  }

}

CharacteristicText.prototype.table = 'characteristic_text';
