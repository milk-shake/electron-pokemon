import { exec, getById } from "../database/database";
import Box from "../entities/box";

export default class boxIdController {
  constructor() {}

  static getById(id, asObject = true) {
    return new Promise(function(resolve, reject) {
      let box = null;
      getById(id,
        `SELECT
        t1.id,
        t1.name,
        t1.boxLimit as 'limit'
        FROM boxes as t1
        `)
        .then(function(results) {
          if(results) {
            box = (asObject) ? new Box(results) : results;
          }

          resolve(box);
        });


    });
  }

  static getForPokemonId(pokemonId, asObject = true) {
    return new Promise(function(resolve, reject) {
      let box = null;
      exec(`
        SELECT
        t2.id,
        t2.name,
        t2.boxLimit as 'limit'
        FROM trainer_pokemon as t1
        LEFT JOIN boxes as t2 ON t2.id = t1.box_id
        WHERE t1.id =` + pokemonId
      )
      .then(function(results) {
        if(results) {
          box = (asObject) ? new Box(results[0]) : results[0];
        }
        resolve(box);
      });
    });
  }
}
