import { exec, getById } from "../database/database";
import Pokemon from "../entities/pokemon";

export default class PokemonController {
  constructor() {}

  static getById(id, asObject = true) {
    return new Promise(function(resolve, reject) {
      let pokemon = null;
      let results = getById(id, "SELECT * FROM pokemon");

      if(results) {
        pokemon = (asObject) ? new Pokemon(results) : results;
      }

      resolve(pokemon);
    });

  }
}
