import { exec, getById } from "../database/database";
import DamageClass from "../entities/damageClass";

export default class DamageClassController {
  constructor() {}

  static getById(id, as_object = true) {
    let damageClass = null;
    let results = getById(id, `
      SELECT
      t1.id,
      t2.name,
      t2.description
      FROM move_damage_classes as t1
      INNER JOIN move_damage_class_prose as t2 on t2.move_damage_class_id = t1.id AND t2.local_language_id = 9
    `);

    if(results) {
      damageClass = (as_object) ? new DamageClass(results) : results;
    }

    return damageClass;

  }

}
