import TrainerPokemon from "../models/trainerPokemon.model";
import MoveName from "../models/moveName.model";
import Type from "../models/type.model";
import SpeciesType from "../models/speciesType.model";
import CharacteristicText from "../models/characteristicText.model";

export function addToSpotlight(pokemon) {
  return function(dispatch, getState) {
    const trainer = getState().TrainerReducer.trainer;
    TrainerPokemon.where('id', '=', pokemon.id)
    .with('trainerPokemonMoves', (tpMove) => {
      tpMove.with('moves', (move) => {
        move.with('names', (name) => {
          name.andWhere('local_language_id', '=', trainer.local_language_id);
        })
        .with('types', (type) => {
          type.with('names', (name) => {
            name.andWhere('local_language_id', '=', trainer.local_language_id);
          });
        });
      });
    })
    .with('species', (tpSpecies) => {
      tpSpecies.with('species', (species) => {
        species.with('names', (name) => {
          name.andWhere('local_language_id', '=', trainer.local_language_id);
        })
        .with('types', (speciesType) => {
          speciesType.with('types', (type) => {
            type.with('names', (name) => {
              name.andWhere('local_language_id', '=', trainer.local_language_id);
            })
          });
        });
      });
    })
    .with('natures', (tpNature) => {
      tpNature.with('natures', (nature) => {
        nature.with('names', (name) => {
          name.andWhere('local_language_id', '=', trainer.local_language_id);
        });
      });
    })
    .with('characteristics', (tpChar) => {
      tpChar.with('characteristics', (char) => {
        char.with('text', (text) => {
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
    .with('abilities', (tpAbility) => {
      tpAbility.with('abilities', (ability) => {
        ability.with('flavors', (flavor) => {
          flavor.andWhere('language_id', '=', trainer.local_language_id);
        })
        .with('names', (name) => {
          name.andWhere('local_language_id', '=', trainer.local_language_id);
        })
        .with('prose', (prose) => {
          prose.andWhere('local_language_id', '=', trainer.local_language_id);
        });
      });
    })
    .asAttributes()
    .get()
    .then((results) => {
      dispatch({type: "POKEMONSPOTLIGHT_ADDED", payload: results[0]});
    });
  }
}

export function removeFromSpotlight(pokemon) {
  return function(dispatch) {
    dispatch({type: "POKEMONSPOTLIGHT_REMOVED", payload: pokemon});
  }
}
