import { exec, getById } from "../database/database";
import Ability from "../entities/ability";

export default class AbilityController {
  constructor() {}

  static getById(id, as_object = true) {
    return new Promise(function(resolve, reject) {
      let ability = null;
      getById(id,
        `SELECT
        t1.id,
        t2.effect,
        t3.name
        FROM abilities as t1
        INNER JOIN ability_prose as t2 on t2.ability_id = t1.id
        INNER JOIN ability_names as t3 on t3.ability_id = t1.id AND t3.local_language_id = 9
        `)
      .then(function(results) {
        if(results) {
          ability = (as_object) ? new Ability(results) : results;
        }

        resolve(ability);
      });
    });
  }

  static getForPokemonId(pokemonId) {
    return new Promise(function(resolve, reject) {
      let abilities = [];
      exec("SELECT * FROM pokemon_abilities WHERE pokemon_id = " + pokemonId)
      .then(function(pokemonAbilities) {

        pokemonAbilities.forEach(function(pokemonAbility) {
          let ability = AbilityController.getById(pokemonAbility.ability_id, false);
          ability.isHidden = pokemonAbility.is_hidden;
          ability.slot = pokemonAbility.slot;
          abilities.push(new Ability(ability));
        });

        resolve(abilities);
      });
    });





  }

}
