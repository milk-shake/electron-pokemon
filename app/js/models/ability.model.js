import Model from "../lib/model";
import AbilityFlavor from "./abilityFlavor.model";
import AbilityName from "./abilityName.model";
import AbilityProse from "./abilityProse.model";

export default class Ability extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

  flavors() {
    return this.has(AbilityFlavor, 'ability_id', 'id');
  }

  names() {
    return this.has(AbilityName, 'ability_id', 'id');
  }

  prose() {
    return this.has(AbilityProse, 'ability_id', 'id');
  }

}

Ability.prototype.table = 'abilities';
