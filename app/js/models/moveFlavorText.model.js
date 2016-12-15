import Model from "../lib/model";

export default class MoveFlavorText extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

}

MoveFlavorText.prototype.table = 'move_flavor_text';
