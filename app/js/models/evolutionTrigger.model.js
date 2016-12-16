import Model from "../lib/model";

import EvolutionTriggerProse from "./evolutionTriggerProse.model";

export default class EvolutionTrigger extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  prose() {
    return this.has(EvolutionTriggerProse, 'evolution_trigger_id', 'id');
  }

}

EvolutionTrigger.prototype.table = 'evolution_triggers';
