import TrainerPokemon from "../models/trainerPokemon.model";
import SpeciesType from "../models/speciesType.model";

export function getPokemonForTrainerId(id) {

  return function(dispatch) {
    TrainerPokemon.where('trainer_id', '=', id)
    .with('abilities', {with: ['abilities']})
    .with('characteristics', {with: ['characteristics']})
    .with('natures', {with: ['natures']})
    .with('species', {with: ['species']})
    .with('moves', {with: ['moves']})
    .get()
    .then(function(results) {
      console.log('stubbed');
      // dispatch({type: "PARTYPOKEMON_FULFILLED", payload: results});
    });
  }

}

export function getPartyPokemonForTrainerId(id) {
  return function(dispatch) {
    TrainerPokemon.where('trainer_id', '=', id)
    .andWhere('box_id', '=', 18)
    .with('species', {with: ['species']})
    .get()
    .then(function(results) {

      let promises = [];

      results.forEach(function(result) {
        let speciesId = result.attributes.trainerpokemonspecies[0].attributes.species_id;
          promises.push(SpeciesType.where('pokemon_id', '=', speciesId).with('types').logSql().get());
      });

      Promise.all(promises)
      .then(function(types) {
        types.forEach(function(type) {
          results.forEach(function(result) {
              type.forEach(function(t) {
                if(t.attributes.pokemon_id == result.attributes.trainerpokemonspecies[0].attributes.species_id) {
                  result.attributes.trainerpokemonspecies[0].attributes.species[0].attributes.speciestype = result.attributes.trainerpokemonspecies[0].attributes.species[0].attributes.speciestype || [];
                  result.attributes.trainerpokemonspecies[0].attributes.species[0].attributes.speciestype.push(t);
                }
              });
          });
        });

        dispatch({type: "PARTYPOKEMON_FULFILLED", payload: results});

      });
    });
  }

}

export function getBoxPokemonForBoxId(trainerId, boxId) {
  return function(dispatch) {
    TrainerPokemon.where('trainer_id', '=', trainerId)
    .andWhere('box_id', '=', boxId)
    .with('species', {with: ['species']})
    .get()
    .then(function(results) {
      dispatch({type: "BOXPOKEMON_FULFILLED", payload: {boxId: boxId, pokemon: results}});
    })
  }
}
