import { exec, getById } from "../database/database";
import TrainerPokemon from "../entities/trainerPokemon";

export default class TrainerPokemonController {
  constructor() {}

  static getById(id) {
    let pokemon = null;
    let results = getById(id, `
      SELECT
        trainer_name as trainerName,
        pokemon_id as pokemonId,
        gender_id as genderId,
        move_1_id as move1Id,
        move_2_id as move2Id,
        move_3_id as move3Id,
        move_4_id as move4Id,
        level,
        attack,
        defence,
        sp_attack as spAttack,
        sp_defence as spDefence,
        speed,
        hp,
        evasion,
        nature_id as natureId,
        OT as oT,
        ability_id as abilityId,
        date_met as dateMet,
        level_met as levelMet,
        characteristic_id as characteristicId,
        attack_rating_id as attackRatingId,
        defence_rating_id as defenceRatingId,
        sp_attack_rating_id as spAttackRatingId,
        sp_defence_rating_id as spDefenceRatingId,
        hp_rating_id as hpRatingId,
        speed_rating_id as speedRatingId,
        potential_id as potentialId,
        isShiny,
        box_id as boxId,
        id as trainerPokemonId,
        nick_name as nickName
      FROM trainer_pokemon WHERE id = ` + id
    );

    if(results.length) {
      pokemon = new TrainerPokemon(results[0]);
    }

    return pokemon;
  }

  static getAll() {
    let pokemon = [];
    let results = exec(`
      SELECT
        trainer_name as trainerName,
        pokemon_id as pokemonId,
        gender_id as genderId,
        move_1_id as move1Id,
        move_2_id as move2Id,
        move_3_id as move3Id,
        move_4_id as move4Id,
        level,
        attack,
        defence,
        sp_attack as spAttack,
        sp_defence as spDefence,
        speed,
        hp,
        evasion,
        nature_id as natureId,
        OT as oT,
        ability_id as abilityId,
        date_met as dateMet,
        level_met as levelMet,
        characteristic_id as characteristicId,
        attack_rating_id as attackRatingId,
        defence_rating_id as defenceRatingId,
        sp_attack_rating_id as spAttackRatingId,
        sp_defence_rating_id as spDefenceRatingId,
        hp_rating_id as hpRatingId,
        speed_rating_id as speedRatingId,
        potential_id as potentialId,
        isShiny,
        id as trainerPokemonId,
        box_id as boxId,
        nick_name as nickName
      FROM trainer_pokemon`
    );

    if(results.length) {
      results.forEach(function(result) {
        pokemon.push(new TrainerPokemon(results[0]));
      })

    }

    return pokemon;
  }
}
