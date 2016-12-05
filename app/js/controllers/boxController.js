import { exec, getById } from "../database/database";
import Box from "../entities/box";

export default class boxIdController {
  constructor() {}

  static getById(id, as_object = true) {
    let box = null;
    let results = getById(id,
      `SELECT
      t1.id,
      t1.name,
      t1.boxLimit as 'limit'
      FROM boxes as t1
      `);

    if(results) {
      box = (as_object) ? new Box(results) : results;
    }

    return box;

  }
}
