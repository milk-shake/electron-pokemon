import { exec } from "../database/database";
import Type from "../entities/type";

export default class TypeController {
  constructor() {}

  static getById(id, as_object = true) {
    let type = null;
    let results = exec(`
      SELECT t1.id, t1.damage_class_id as damageClassId, t2.name
      FROM types as t1
      INNER JOIN type_names as t2 on t2.type_id = t1.id AND t2.local_language_id = 9
      WHERE t1.id = ` + id);

    if(results.length) {
      type = (as_object) ? new Type(results[0]) : results[0];
    }

    return type;

  }

  static getForPokemonId(pokemonId) {
    let types = [];
    let pokemonTypes = exec(`
      SELECT * FROM pokemon_types WHERE pokemon_id = `
    + pokemonId);

    pokemonTypes.forEach(function(pokemonType) {
      let type = TypeController.getById(pokemonType.type_id, false);
      types.push(new Type(type));
    });

    return types;
  }

}
