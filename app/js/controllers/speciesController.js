import { exec, getById } from "../database/database";
import Species from "../entities/species";

export default class SpeciesController {
  constructor() {}

  static getById(speciesId, asObject = true) {
    return new Promise(function(resolve, reject) {
      let pokemonSpecies = null;
      exec(`
        SELECT
        t1.id,
        t1.generation_id as generationId,
        t1.evolves_from_species_id as evolvesFromSpeciesId,
        t1.evolution_chain_id as evolutionChainId,
        t1.color_id as colorId,
        t1.shape_id as shapeId,
        t1.habitat_id as habitatId,
        t1.gender_rate as genderRate,
        t1.capture_rate as captureRate,
        t1.base_happiness as baseHappiness,
        t1.is_baby as isBaby,
        t1.hatch_counter as hatchCounter,
        t1.has_gender_differences as hasGenderDifferences,
        t1.growth_rate_id as growthRateId,
        t1.forms_switchable as formsSwitchable,
        t1.conquest_order as conquestOrder,
        t2.flavor_text as flavorText,
        t3.form_description as prose,
        t4.name as name,
        t4.genus as genus
        FROM pokemon_species as t1
        LEFT JOIN pokemon_species_flavor_text as t2 ON t2.species_id = t1.id AND t2.language_id = 9 AND t2.version_id = 16
        LEFT JOIN pokemon_species_prose as t3 ON t3.pokemon_species_id = t1.id AND t3.local_language_id = 9
        LEFT JOIN pokemon_species_names as t4 ON t4.pokemon_species_id = t1.id AND t4.local_language_id = 9
        WHERE t1.id = ` + speciesId
      )
      .then(function(results) {
        if(results.length) {
          pokemonSpecies = (asObject)  ? new Species(results[0]) : results[0];
        }

        resolve(pokemonSpecies);
      });
    });
  }

}
