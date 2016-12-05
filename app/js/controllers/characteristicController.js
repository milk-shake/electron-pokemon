import { exec, getById } from "../database/database";
import Characteristic from "../entities/characteristic";

export default class CharacteristicController {
  constructor() {}

  static getById(id) {
    let characteristic = null;
    let results = getById(id, `
      SELECT
      t1.id,
      t1.stat_id as statId,
      t2.message
      FROM characteristics as t1
      INNER JOIN characteristic_text as t2 on t2.characteristic_id = t1.id AND t2.local_language_id = 9`);

    if(results) {
      characteristic = new Characteristic(results);
    }

    return characteristic;

  }
}
