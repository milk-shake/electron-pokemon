import { exec, getById } from "../database/database";
import Pokemon from "../entities/pokemon";

export default class EvolutionController {
  constructor() {}

  static getChainById(evolutionChainId, asObject = true) {
    let pokemon = [];
    let chain = exec(`
      SELECT
      t2.*
      FROM pokemon_species as t1
      LEFT JOIN pokemon as t2 ON t1.id = t2.species_id
      WHERE t1.evolution_chain_id = ` + evolutionChainId + ` ORDER BY t2.id ASC`
    );

    if(chain.length) {
      chain.forEach(function(poke) {
        pokemon.push(new Pokemon(poke));
      });
    }

    return pokemon;
  }

}
