import TrainerPokemon from "../models/trainerPokemon.model";
import MoveName from "../models/moveName.model";
import Type from "../models/type.model";
import SpeciesType from "../models/speciesType.model";
import CharacteristicText from "../models/characteristicText.model";

export function addToSpotlight(pokemon) {
  return function(dispatch, getState) {
    const trainer = getState().TrainerReducer.trainer;
    const spotLightPokemon = getState().SpotLightReducer.pokemon;

    let exists = spotLightPokemon.filter(function(slPoke) {
      if(pokemon.id === slPoke.id) {
        return pokemon;
      }
    });

    if(!exists.length) {
      dispatch({type: "POKEMONSPOTLIGHT_ADDED", payload: pokemon});
    }
  }
}

export function removeFromSpotlight(pokemon) {
  return function(dispatch) {
    dispatch({type: "POKEMONSPOTLIGHT_REMOVED", payload: pokemon});
  }
}

export function updatePokemonTrait(name, pokemon, trait) {
  return function(dispatch) {
    let modelColumnName = null;
    switch(name) {
      case "abilities": {
        modelColumnName = "ability_id";
        break;
      }
      case "characteristics": {
        modelColumnName = "characteristic_id";
        break;
      }
      case "natures": {
        modelColumnName = "nature_id";
        break;
      }
    }


    let tp = new TrainerPokemon();
    tp.hydrate(pokemon);
    tp.updateAttribute(modelColumnName, trait.id).save();
    dispatch({type: "POKEMONSPOTLIGHT_TRAIT_UPDATE", payload: {name: name, pokemon: pokemon, trait: trait}});
  }
}

export function updatePokemonNickname(pokemon, name) {
  return function(dispatch) {
    let tp = new TrainerPokemon();
    tp.hydrate(pokemon);
    tp.updateAttribute('nick_name', name).save();
    dispatch({type: "POKEMONSPOTLIGHT_NICKNAME_UPDATE", payload: {name: name, pokemon: pokemon}});
  }
}
