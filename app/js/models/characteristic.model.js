import Model from "../lib/model";
import CharacteristicText from "./characteristicText.model";
import Stat from "./stat.model";

export default class Characteristic extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  text() {
    return this.has(CharacteristicText, 'characteristic_id', 'id');
  }

  stat() {
    return this.has(Stat, 'id', 'stat_id');
  }

}

Characteristic.prototype.table = 'characteristics';
