import { exec, getById } from "../database/database";
import Stat from "../entities/stat";

export default class StatController {
  constructor() {}

  static getById(id, as_object = true) {
    let stat = null;
    let results = getById(id,
      `
      SELECT t1.id,
      t1.damage_class_id as damageClassId,
      t1.is_battle_only as isBattleOnly,
      t2.name
      FROM stats as t1
      INNER JOIN stat_names as t2 on t2.stat_id = t1.id AND t2.local_language_id = 9
    `);

    if(results) {
      stat = (as_object) ? new Stat(results) : results;
    }

    return stat;

  }

}
