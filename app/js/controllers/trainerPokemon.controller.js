import { exec } from "../database/database";
import TrainerPokemon from "../entities/trainerPokemon.entity";

export default class TrainerPokemonController {
  static getPartyPokemon() {
    return new Promise(function(resolve, reject) {
      exec(
        `
          SELECT
          gender_id as genderId,
          level,
          attack,
          defence,
          sp_attack as spAttack,
          sp_defence as spDefence,
          speed,
          hp,
          OT as originalTrainer,
          date_met as dateMet,
          level_met as levelMet,
          attack_rating_id as attackRatingId,
          defence_rating_id as defenceRatingId,
          sp_attack_rating_id as spAttackRatingId,
          sp_defence_rating_id as spDefenceRatingId,
          hp_rating_id as hpRatingId,
          speed_rating_id as speedRatingId,
          potential_id as potentialId,
          id,
          isShiny,
          nick_name as nickName,
          evasion,
          box_id as boxId
          FROM trainer_pokemon
          WHERE box_id = 18
        `
      )
      .then(function(results) {
        let promises = [];
        results.forEach(function(result) {
          promises.push(TrainerPokemon.createFullInstance(result));
        });

        Promise.all(promises).then(function(results) {
          resolve(results);
        });
      })
    });
  }


  static getSpeciesIdForTrainerPokemonId(id) {
    return new Promise(function(resolve, reject) {
      exec(`
        SELECT
          species_id as speciesId
          FROM trainer_pokemon_species
          WHERE trainer_pokemon_id =
      ` + id)
      .then(function(results) {
        resolve(results);
      });
    });
  }

  static getAbilityIdForTrainerPokemonId(id) {
    return new Promise(function(resolve, reject) {
      exec(`
        SELECT
          ability_id as abilityId
          FROM trainer_pokemon_abilities
          WHERE trainer_pokemon_id =
      ` + id)
      .then(function(results) {
        resolve(results);
      });
    });
  }

  static getNatureIdForTrainerPokemonId(id) {
    return new Promise(function(resolve, reject) {
      exec(`
        SELECT
          nature_id as natureId
          FROM trainer_pokemon_natures
          WHERE trainer_pokemon_id =
      ` + id)
      .then(function(results) {
        resolve(results);
      });
    });
  }

  static getCharacteristicIdForTrainerPokemonId(id) {
    return new Promise(function(resolve, reject) {
      exec(`
        SELECT
          characteristic_id as characteristicId
          FROM trainer_pokemon_characteristics
          WHERE trainer_pokemon_id =
      ` + id)
      .then(function(results) {
        resolve(results);
      });
    });
  }

  static getMoveIdsForTrainerPokemonId(id) {
    return new Promise(function(resolve, reject) {
      exec(`
        SELECT
          move_id as moveId,
          slot,
          level_learnt as levelLearnt
          FROM trainer_pokemon_moves
          WHERE trainer_pokemon_id =
      ` + id)
      .then(function(results) {
        resolve(results);
      });
    });
  }
}
