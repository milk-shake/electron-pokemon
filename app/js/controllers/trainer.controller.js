import { exec } from "../database/database";

import Trainer from "../entities/trainer.entity";

export default class TrainerController {
  static getById(id, asObject = true) {
    return new Promise(function(resolve, reject) {
        exec(
          `
            SELECT
            id,
            name,
            gender_id as genderId
            from trainer
            where id = ` + id
        ).then(function(results) {
          let trainer = (asObject) ? new Trainer(results[0]) : results[0];
          resolve(trainer);
        });

    });
  }
}
