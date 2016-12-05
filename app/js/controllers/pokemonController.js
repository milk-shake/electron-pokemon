import { exec, getById } from "../database/database";
import Pokemon from "../entities/pokemon";

export default class PokemonController {
  constructor() {}

  static getById(id) {

    let pokemon = null;
    let results = getById(id, "SELECT * FROM pokemon");

    if(results) {
      pokemon = new Pokemon(results);
    }

    return pokemon;
  }
}
