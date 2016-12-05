import { exec, getById } from "../database/database";
import TrainerPokemonMove from "../entities/trainerPokemonMove";

export default class TrainerPokemonMoveController {
  constructor() {}

  static getById(id, asObject = true) {
    let move = null;
    let results = exec(`
      SELECT
      id, trainer_pokemon_id as pokemonId, move_id as moveId, slot, level_learnt as levelLearnt
      FROM trainer_pokemon_moves as t1
      WHERE t1.id =` + id);

    if(results.length) {
      move = (asObject) ? new TrainerPokemonMove(results[0]) : results[0];
    }

    return move;

  }

  static getForPokemonId(pokemon_id, asObject = true) {
    let moves = [];
    let results = exec(`
      SELECT
      id, trainer_pokemon_id as pokemonId, move_id as moveId, slot, level_learnt as levelLearnt
      FROM trainer_pokemon_moves as t1
      WHERE t1.trainer_pokemon_id =` + pokemon_id);


    results.forEach(function(result) {
      let pokeMove = (asObject) ? new TrainerPokemonMove(result) : result;
      moves.push(pokeMove);
    });

    return moves;
  }
}
