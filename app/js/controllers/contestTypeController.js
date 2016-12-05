import { exec } from "../database/database";
import ContestType from "../entities/contestType";

export default class ContestTypeController {
  constructor() {}

  static getById(id, as_object = true) {
    let type = null;
    let results = exec(`
      SELECT t1.id, t1.id,
      t2.name,
      t2.flavor as berryFlavor,
      t2.color
      FROM contest_types as t1
      INNER JOIN contest_type_names as t2 on t2.contest_type_id = t1.id AND t2.local_language_id = 9
      WHERE t1.id = ` + id);

    if(results.length) {
      type = (as_object) ? new ContestType(results[0]) : results[0];
    }

    return type;

  }
}
