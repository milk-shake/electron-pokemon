import Model from "../lib/model";

export default class CharacteristicText extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

}

CharacteristicText.prototype.table = 'characteristic_text';
