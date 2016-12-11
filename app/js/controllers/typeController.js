import { exec } from "../database/database";
import Type from "../entities/type";

export default class TypeController {
  constructor() {}

  static getById(id, as_object = true) {
    return new Promise(function(resolve, reject) {
      let type = null;
      exec(`
        SELECT t1.id, t1.damage_class_id as damageClassId, t2.name
        FROM types as t1
        INNER JOIN type_names as t2 on t2.type_id = t1.id AND t2.local_language_id = 9
        WHERE t1.id = ` + id
      )
      .then(function(results) {
        if(results.length) {
          type = (as_object) ? new Type(results[0]) : results[0];
        }

        resolve(type);
      });
    });
  }

  static getForSpeciesId(pokemonId) {
    return new Promise(function(resolve, reject) {
      let types = [];
      exec(`
        SELECT t1.id, t1.damage_class_id as damageClassId, t2.name
        FROM types as t1
        INNER JOIN type_names as t2 on t2.type_id = t1.id AND t2.local_language_id = 9
        WHERE t1.id IN (SELECT t3.type_id FROM pokemon_types as t3 WHERE t3.pokemon_id = ` + pokemonId + `)`

      )
      .then(function(results) {
        results.forEach(function(pokemonType) {
          types.push(new Type(pokemonType));
        });

        resolve(types);
      });
    });

  }

}
