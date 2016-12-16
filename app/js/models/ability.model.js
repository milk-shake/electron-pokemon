import Model from "../lib/model";
import AbilityFlavorText from "./abilityFlavorText.model";
import AbilityName from "./abilityName.model";
import AbilityProse from "./abilityProse.model";

export default class Ability extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  flavors() {
    return this.has(AbilityFlavorText, 'ability_id', 'id');
  }

  names() {
    return this.has(AbilityName, 'ability_id', 'id');
  }

  prose() {
    return this.has(AbilityProse, 'ability_id', 'id');
  }

}

Ability.prototype.table = 'abilities';
