import { exec, getById } from "../database/database";
import Gender from "../entities/gender";

export default class GenderController {
  constructor() {}

  static getById(id, as_object = true) {
    return new Promise(function(resolve, reject) {
      let gender = null;
      let results = getById(id,
        `
        SELECT
        t1.id,
        t1.identifier as name
        FROM genders as t1
      `)
      .then(function(results) {
        if(results) {
          gender = (as_object) ? new Gender(results) : results;
        }

        resolve(gender);
      });
    });
  }

}
