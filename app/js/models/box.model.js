import Model from "../lib/model";

export default class Box extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'trainer_pokemon'
  }) {

    super(options);
  }

}

Box.prototype.table = 'trainer_pokemon_boxes';
