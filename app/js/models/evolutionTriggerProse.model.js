import Model from "../lib/model";

import EvolutionTrigger from "./evolutionTrigger.model";
import Language from "./language.model";

export default class EvolutionTriggerProse extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  evolutionTrigger() {
    return this.has(EvolutionTrigger, 'id', 'evolution_trigger_id');
  }

  language() {
    return this.has(Language, 'id', 'local_language_id');
  }

}

EvolutionTriggerProse.prototype.table = 'evolution_trigger_prose';
