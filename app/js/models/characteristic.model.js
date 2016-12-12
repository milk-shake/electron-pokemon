import Model from "../lib/model";
import CharacteristicText from "./characteristicText.model";

export default class Characteristic extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

  text() {
    return this.has(CharacteristicText, 'characteristic_id', 'id');
  }

}

Characteristic.prototype.table = 'characteristics';
