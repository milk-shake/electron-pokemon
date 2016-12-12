import { exec } from "../database/database";
import Pokemon from "../entities/pokemon.entity";

export default class PokemonController {

  static getBySpeciesId(id, asObject = true) {
    return new Promise(function(resolve, reject) {
      exec(
        `
          SELECT
          id,
          identifier,
          species_id as speciesId,
          height,
          weight,
          base_experience as baseExperience,
          'order',
          is_default as isDefault
          FROM pokemon
          WHERE species_id =
        ` + id
      )
      .then(function(results) {
          let promises = [];

          results.forEach(function(result) {
            let p = (asObject) ? Pokemon.createFullInstance(result) : Pokemon.createFullOptions(result);
            promises.push(p);
          });

          Promise.all(promises).then(function(results) {
            resolve(results);
          });
      });
    });
  }

  static getNameForSpeciesId(id) {
    return new Promise(function(resolve, reject) {
      exec(`
        SELECT name
        FROM pokemon_species_names
        WHERE local_language_id = 9 AND pokemon_species_id =
      ` + id)
      .then(function(results){
        resolve(results);
      });
    });
  }

  static getGenusForSpeciesId(id) {
    return new Promise(function(resolve, reject) {
      exec(`
        SELECT genus
        FROM pokemon_species_names
        WHERE local_language_id = 9 AND pokemon_species_id =
      ` + id)
      .then(function(results){
        resolve(results);
      });
    });
  }

  static getFlavorForSpeciesId(id) {
    return new Promise(function(resolve, reject) {
      exec(`
        SELECT flavor_text as flavor
        FROM pokemon_species_flavor_text
        WHERE language_id = 9 AND version_id = 16 AND species_id =
      ` + id)
      .then(function(results){
        resolve(results);
      });
    });
  }

  static getProseForSpeciesId(id) {
    return new Promise(function(resolve, reject) {
      exec(`
        SELECT form_description as prose
        FROM pokemon_species_prose
        WHERE local_language_id = 9 AND  pokemon_species_id =
      ` + id)
      .then(function(results){
        resolve(results);
      });
    });
  }


}
