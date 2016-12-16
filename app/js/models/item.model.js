import Model from "../lib/model";

import Berry from "./berry.model";
import EvolutionChain from "./evolutionChain.model";
import ItemFlagMap from "./itemFlagMap.model";
import ItemFlavorText from "./itemFlavorText.model";
import ItemGameIndex from "./itemGameIndex.model";
import ItemName from "./itemName.model";
import ItemProse from "./itemProse.model";
import ItemCategory from "./itemCategory.model";
import ItemFlingEffect from "./itemFlingEffect.model";

export default class Item extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  berry() {
    return this.has(Berry, 'item_id', 'id');
  }

  evolutionChain() {
    return this.has(EvolutionChain, 'baby_trigger_item_id', 'id');
  }

  itemFlagMap() {
    return this.has(ItemFlagMap, 'item_id', 'id');
  }

  flavorText() {
    return this.has(ItemFlavorText, 'item_id', 'id');
  }

  itemGameIndices() {
    return this.has(ItemGameIndices, 'item_id', 'id');
  }

  itemName() {
    return this.has(ItemName, 'item_id', 'id');
  }

  itemProse() {
    return this.has(ItemProse, 'item_id', 'id');
  }

  itemCategory() {
    return this.has(itemCategory, 'id', 'category_id');
  }

  flingEffect() {
    return this.has(ItemFlingEffect, 'id', 'item_fling_effect_id');
  }


}

Item.prototype.table = 'items';
