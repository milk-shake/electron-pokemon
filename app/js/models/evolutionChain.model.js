import Model from "../lib/model";
import Item from "./item.model";

export default class EvolutionChain extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  babyTriggerItem() {
    return this.has(Item, 'id', 'baby_trigger_item_id');
  }

}

EvolutionChain.prototype.table = 'evolution_chains';
