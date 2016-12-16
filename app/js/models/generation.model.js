import Model from "../lib/model";

import GenerationName from "./generationName.model";
import Region from "./region.model";
import ItemGameIndex from "./itemGameIndex.model";

export default class Generation extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  generationName() {
    return this.has(GenerationName, 'generation_id', 'id');
  }

  region() {
    return this.has(Region, 'main_region_id', 'id');
  }

  itemGameIndex() {
    return this.has(ItemGameIndex, 'generaition_id', 'id');
  }

}

Generation.prototype.table = 'generations';
