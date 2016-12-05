import { exec, getById } from "../database/database";
import Nature from "../entities/nature";

export default class NatureController {
  constructor() {}

  static getById(id, as_object = true) {
    let nature = null;
    let results = getById(id, `
      SELECT t1.id,
      t1.decreased_stat_id as decreasedStatId,
      t1.increased_stat_id as increasedStatId,
      t1.hates_flavor_id as hatesFlavorId,
      t1.likes_flavor_id as likesFlavorId,
      t2.name
      FROM natures as t1
      INNER JOIN nature_names as t2 on t2.nature_id = t1.id AND t2.local_language_id = 9
    `);

    if(results) {
      nature = (as_object) ? new Nature(results) : results;
    }

    return nature;

  }

}
