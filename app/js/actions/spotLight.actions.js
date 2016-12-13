import TrainerPokemon from "../models/trainerPokemon.model";
import MoveName from "../models/moveName.model";
import Type from "../models/type.model";
import SpeciesType from "../models/speciesType.model";
import CharacteristicText from "../models/characteristicText.model";

export function addToSpotlight(pokemon) {
  return function(dispatch) {
    TrainerPokemon.where('id', '=', pokemon.attributes.id)
    .with('trainerPokemonMoves', {with: ['moves']})
    .with('species', {with: ['species']})
    .with('natures', {with: ['natures']})
    .with('characteristics', {with: ['characteristics']})
    .get()
    .then(function(results) {
      if(results.length) {

        let promises = [];
        promises.push(SpeciesType.where('pokemon_id', '=', results[0].attributes.trainerpokemonspecies[0].attributes.species_id).with('types').get());

        if(results[0].attributes.trainerpokemonmove) {
          results[0].attributes.trainerpokemonmove.forEach(function(tpMove) {
            promises.push(MoveName.where('move_id', '=', tpMove.attributes.move_id).andWhere('local_language_id', '=', 9).get());
            promises.push(Type.where('id', '=', tpMove.attributes.move[0].attributes.type_id).with('names').get());
          });
        }

        if(results[0].attributes.trainerpokemoncharacteristic) {
          results[0].attributes.trainerpokemoncharacteristic.forEach(function(tpChar) {
            console.log(tpChar);
            promises.push(CharacteristicText
              .where('characteristic_id', '=', tpChar.attributes.characteristic_id)
              .andWhere('local_language_id', '=', 9)
              .get()
            )
          })
        }

        Promise.all(promises).then(function(promiseResults) {


          promiseResults.forEach(function(promiseResult) {

            promiseResult.forEach(function(presult) {
              if(presult instanceof SpeciesType) {
                  if(presult.attributes.pokemon_id == results[0].attributes.trainerpokemonspecies[0].attributes.species_id) {
                    results[0].attributes.trainerpokemonspecies[0].attributes.species[0].attributes.speciestype = results[0].attributes.trainerpokemonspecies[0].attributes.species[0].attributes.speciestype || [];
                    results[0].attributes.trainerpokemonspecies[0].attributes.species[0].attributes.speciestype.push(presult);
                  }
              }

              if(presult instanceof CharacteristicText) {
                if(presult.attributes.characterstic_id == results[0].attributes.trainerpokemoncharacteristic[0].attributes.characterstic_id) {
                  results[0].attributes.trainerpokemoncharacteristic[0].attributes.characteristic[0].attributes.characteristictext = results[0].attributes.trainerpokemoncharacteristic[0].attributes.characteristic[0].attributes.characteristictext || [];
                  results[0].attributes.trainerpokemoncharacteristic[0].attributes.characteristic[0].attributes.characteristictext.push(presult);
                }
              }

              if(results[0].attributes.trainerpokemonmove) {
                results[0].attributes.trainerpokemonmove.forEach(function(tpMove) {
                  if(presult instanceof Type) {
                    if(tpMove.attributes.move[0].attributes.type_id === presult.attributes.id) {
                      tpMove.attributes.move[0].attributes.movetype = [];
                      tpMove.attributes.move[0].attributes.movetype.push(presult);
                    }
                  }
                  if(presult instanceof MoveName) {
                    if(tpMove.attributes.move[0].attributes.id === presult.attributes.move_id) {
                      tpMove.attributes.move[0].attributes.movename = [];
                      tpMove.attributes.move[0].attributes.movename.push(presult);
                    }
                  }
                });
              }
            });
          });

          dispatch({type: "POKEMONSPOTLIGHT_ADDED", payload: results[0]});


        });
      }
    });
  }
}

export function removeFromSpotlight(pokemon) {
  return function(dispatch) {
    dispatch({type: "POKEMONSPOTLIGHT_REMOVED", payload: pokemon});
  }
}
