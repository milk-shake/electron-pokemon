import Model from "../lib/model";

export default class MoveFlavourText extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

}

MoveFlavorText.prototype.table = 'move_flavor_text';
