import TrainerPokemon from "../models/trainerPokemon.model";
import MoveName from "../models/moveName.model";
import Type from "../models/type.model";
import SpeciesType from "../models/speciesType.model";
import CharacteristicText from "../models/characteristicText.model";

export function addToSpotlight(pokemon) {
  return function(dispatch, getState) {
    const trainer = getState().TrainerReducer.trainer;
    TrainerPokemon.where('id', '=', pokemon.id)
    .with('trainerPokemonMoves', function(tpmove) {
      tpmove.with('moves', function(move) {
        move.with('names', function(name) {
          name.andWhere('local_language_id', '=', trainer.local_language_id);
        })
        .with('types', function(type) {
          type.with('names', function(name) {
            name.andWhere('local_language_id', '=', trainer.local_language_id);
          });
        });
      });
    })
    .with('species', function(tpspecies) {
      tpspecies.with('species', function(species) {
        species.with('names', function(name) {
          name.andWhere('local_language_id', '=', trainer.local_language_id);
        })
        .with('types', function(speciesType) {
          speciesType.with('types', function(type) {
            type.with('names', function(name) {
              name.andWhere('local_language_id', '=', trainer.local_language_id);
            })
          });
        });
      });
    })
    .with('natures', function(tpnature) {
      tpnature.with('natures', function(nature) {
        nature.with('names', function(name) {
          name.andWhere('local_language_id', '=', trainer.local_language_id);
        });
      });
    })
    .with('characteristics', function(tpchar) {
      tpchar.with('characteristics', function(char) {
        char.with('text', function(text) {
          let langId = 9;
          //characteristic text is only 9 and 5 (french and english)
          switch(trainer.local_language_id) {
            case 5: {
              langId = 5;
              break;
            }
            default: {
              langId = 9;
            }
          }
          text.andWhere('local_language_id', '=', langId);
        })
      })
    })
    .asAttributes()
    .get()
    .then(function(results) {
      dispatch({type: "POKEMONSPOTLIGHT_ADDED", payload: results[0]});
    });
  }
}

export function removeFromSpotlight(pokemon) {
  return function(dispatch) {
    dispatch({type: "POKEMONSPOTLIGHT_REMOVED", payload: pokemon});
  }
}
