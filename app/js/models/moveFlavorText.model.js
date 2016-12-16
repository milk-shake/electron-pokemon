import Model from "../lib/model";

export default class MoveFlavorText extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

}

MoveFlavorText.prototype.table = 'move_flavor_text';
