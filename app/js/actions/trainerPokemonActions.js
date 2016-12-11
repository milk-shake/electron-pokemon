import TrainerPokemonController from "../controllers/trainerPokemonController";
import BoxController from "../controllers/boxController";
import GenderController from "../controllers/genderController";
import SpeciesController from "../controllers/speciesController";
import TypeController from "../controllers/typeController";
import NatureController from "../controllers/natureController";
import CharacteristicController from "../controllers/characteristicController";
import AbilityController from "../controllers/abilityController";
import MoveController from "../controllers/moveController";
import EvolutionController from "../controllers/evolutionController";

import TrainerPokemonStat from "../entities/trainerPokemonStat";

export function fetchOwnedPokemonById(id) {
  return function(dispatch) {
    TrainerPokemonController.getById(id)
    .then(function(pokemon) {
      dispatch({type: "FETCH_SINGLE_TRAINERPOKEMON_FULFILLED", payload: pokemon});
    });
  }
}

export function fetchAllOwnedPokemon() {
  return function(dispatch) {
    TrainerPokemonController.getAll()
    .then(function(pokemon) {
      dispatch({type: "FETCH_TRAINERPOKEMON_FULFILLED", payload: pokemon});
    });
  }
}

export function getBoxForPokemonId(id) {
  return function(dispatch) {
    BoxController.getForPokemonId(id)
    .then(function(box) {
      dispatch({type: "FETCH_BOX_FOR_TRAINERPOKEMON_FULFILLED", payload: box});
    })
  }
}

export function getGenderForPokemonById(id) {
  return function(dispatch) {
    GenderController.getById(id)
    .then(function(gender) {
      dispatch({type: "FETCH_GENDER_FOR_TRAINERPOKEMON_FULFILLED", payload: gender});
    })
  }
}

export function getSpeciesForPokemonById(id) {
  return function(dispatch) {
    SpeciesController.getById(id)
    .then(function(species) {
      dispatch({type: "FETCH_SPECIES_FOR_TRAINERPOKEMON_FULFILLED", payload: species});
    })
  }
}

export function getTypesForSpeciesId(id) {
  return function(dispatch) {
    TypeController.getForSpeciesId(id)
    .then(function(types) {
      dispatch({type: "FETCH_TYPES_FOR_TRAINERPOKEMON_FULFILLED", payload: types});
    });
  }
}

export function getNatureForPokemonById(id) {
  return function(dispatch) {
    NatureController.getById(id)
    .then(function(nature) {
      dispatch({type: "FETCH_NATURE_FOR_TRAINERPOKEMON_FULFILLED", payload: nature});
    });
  }
}

export function getCharacteristicForPokemonById(id) {
  return function(dispatch) {
    CharacteristicController.getById(id)
    .then(function(characteristic) {
      dispatch({type: "FETCH_CHARACTERISTIC_FOR_TRAINERPOKEMON_FULFILLED", payload: characteristic});
    })
  }
}

export function getAbilityForPokemonById(id) {
  return function(dispatch) {
    AbilityController.getById(id)
    .then(function(ability) {
      dispatch({type: "FETCH_ABILITY_FOR_TRAINERPOKEMON_FULFILLED", payload: ability});
    })
  }
}

//TODO move these into a single function and use a name argument.
export function getAttackStatForPokemon(value) {

  return function(dispatch) {
    TrainerPokemonStat.getInstanceByIdentifier('attack', {value: value})
    .then(function(attack) {
      dispatch({type: "FETCH_ATTACKSTAT_FOR_TRAINERPOKEMON_FULFILLED", payload: attack});
    });
  }
}

export function getDefenceStatForPokemon(value) {

  return function(dispatch) {
    TrainerPokemonStat.getInstanceByIdentifier('defense', {value: value})
    .then(function(defence) {
      dispatch({type: "FETCH_DEFENCESTAT_FOR_TRAINERPOKEMON_FULFILLED", payload: defence});
    });
  }
}

export function getSpAttackForPokemon(value) {

  return function(dispatch) {
    TrainerPokemonStat.getInstanceByIdentifier('special-attack', {value: value})
    .then(function(spAttack) {
      dispatch({type: "FETCH_SPATTACKSTAT_FOR_TRAINERPOKEMON_FULFILLED", payload: spAttack});
    });
  }
}

export function getSpDefenceForPokemon(value) {

  return function(dispatch) {
    TrainerPokemonStat.getInstanceByIdentifier('special-defense', {value: value})
    .then(function(spDefence) {
      dispatch({type: "FETCH_SPDEFENCESTAT_FOR_TRAINERPOKEMON_FULFILLED", payload: spDefence});
    });
  }
}

export function getSpeedForPokemon(value) {

  return function(dispatch) {
    TrainerPokemonStat.getInstanceByIdentifier('speed', {value: value})
    .then(function(speed) {
      dispatch({type: "FETCH_SPEED_FOR_TRAINERPOKEMON_FULFILLED", payload: speed});
    });
  }
}

export function getEvasionForPokemon(value) {
  return function(dispatch) {
    TrainerPokemonStat.getInstanceByIdentifier('evasion', {value: value})
    .then(function(speed) {
      dispatch({type: "FETCH_EVASION_FOR_TRAINERPOKEMON_FULFILLED", payload: speed});
    });
  }
}

export function getMove1ForPokemonById(id) {
  return function(dispatch) {
    MoveController.getById(id)
    .then(function(move) {
      TypeController.getById(move.typeId)
      .then(function(type) {
        move.type = type;
        dispatch({type: "FETCH_MOVE1_FOR_TRAINERPOKEMON_FULFILLED", payload: move});
      })
    })
  }
}

export function getMove2ForPokemonById(id) {
  return function(dispatch) {
    MoveController.getById(id)
    .then(function(move) {
      TypeController.getById(move.typeId)
      .then(function(type) {
        move.type = type;
        dispatch({type: "FETCH_MOVE2_FOR_TRAINERPOKEMON_FULFILLED", payload: move});
      })
    })
  }
}

export function getMove3ForPokemonById(id) {
  return function(dispatch) {
    MoveController.getById(id)
    .then(function(move) {
      TypeController.getById(move.typeId)
      .then(function(type) {
        move.type = type;
        dispatch({type: "FETCH_MOVE3_FOR_TRAINERPOKEMON_FULFILLED", payload: move});
      })
    })
  }
}

export function getMove4ForPokemonById(id) {
  return function(dispatch) {
    MoveController.getById(id)
    .then(function(move) {
      TypeController.getById(move.typeId)
      .then(function(type) {
        move.type = type;
        dispatch({type: "FETCH_MOVE4_FOR_TRAINERPOKEMON_FULFILLED", payload: move});
      })
    })
  }
}

export function getEvolutionChain() {

}

export function getNextEvolution(id) {

}
