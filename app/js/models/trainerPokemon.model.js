import Model from "../lib/model";
import TrainerPokemonAbility from "./trainerPokemonAbility.model";
import TrainerPokemonCharacteristic from "./trainerPokemonCharacteristic.model";
import TrainerPokemonNature from "./trainerPokemonNature.model";
import TrainerPokemonSpecies from "./trainerPokemonSpecies.model";
import TrainerPokemonMove from "./trainerPokemonMove.model";

export default class TrainerPokemon extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

  abilities() {
    return this.has(TrainerPokemonAbility, 'trainer_pokemon_id', 'id');
  }

  characteristics() {
    return this.has(TrainerPokemonCharacteristic, 'trainer_pokemon_id', 'id');
  }

  natures() {
    return this.has(TrainerPokemonNature, 'trainer_pokemon_id', 'id');
  }

  species() {
    return this.has(TrainerPokemonSpecies, 'trainer_pokemon_id', 'id');
  }

  trainerPokemonMoves() {
    return this.has(TrainerPokemonMove, 'trainer_pokemon_id', 'id');
  }

}

TrainerPokemon.prototype.table = 'trainer_pokemon';
