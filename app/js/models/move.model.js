import Model from "../lib/model";

import MoveName from "./moveName.model";
import MoveEffect from "./moveEffect.model";
import MoveFlavorText from "./moveFlavorText.model";
import MoveTarget from "./moveTarget.model";
import Type from "./type.model";
import Machine from "./machine.model";
import ContestCombo from "./contestCombo.model";

export default class Move extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  names() {
    return this.has(MoveName, 'move_id', 'id');
  }

  types() {
    return this.has(Type, 'id', 'type_id');
  }

  effects() {
    return this.has(MoveEffect, 'id', 'effect_id');
  }

  flavourTexts() {
    return this.has(MoveFlavorText, 'move_id', 'id');
  }

  targets() {
    return this.has(MoveTarget, 'id', 'target_id');
  }

  machines() {
    return this.has(Machine, 'move_id', 'id');
  }

  contestComboFirstMove() {
    return this.has(ContestCombo, 'first_move_id', 'id');
  }

  contestComboSecondMove() {
    return this.has(ContestCombo, 'second_move_id', 'id');
  }

}

Move.prototype.table = 'moves';
