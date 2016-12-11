import { exec, getById } from "../database/database";
import Stat from "../entities/stat";

export default class StatController {
  constructor() {}

  static getById(id, as_object = true) {
    return new Promise(function(resolve, reject) {
      let stat = null;
      let results = getById(id,
        `
        SELECT t1.id,
        t1.damage_class_id as damageClassId,
        t1.is_battle_only as isBattleOnly,
        t2.name
        FROM stats as t1
        INNER JOIN stat_names as t2 on t2.stat_id = t1.id AND t2.local_language_id = 9
      `)
      .then(function(results) {
        if(results) {
          stat = (as_object) ? new Stat(results) : results;
        }

        resolve(stat);
      });
    });


  }

  static getByIdentifier(name, asObject = true) {
    return new Promise(function(resolve, reject) {
      let stat = null;
      exec(
        `
          SELECT t1.id,
          t1.damage_class_id as damageClassId,
          t1.is_battle_only as isBattleOnly,
          t2.name
          FROM stats as t1
          INNER JOIN stat_names as t2 on t2.stat_id = t1.id AND t2.local_language_id = 9
          WHERE t1.identifier =
        '` + name + "'"
      )
      .then(function(results) {
        if(results.length) {
          stat = (asObject) ? new Stat(results[0]) : results[0];
        }

        resolve(stat);
      });
    });
  }

}
