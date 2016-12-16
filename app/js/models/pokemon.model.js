import Model from "../lib/model";
import Species from "./species.model";
import PokemonAbility from "./pokemonAbility.model";
import PokedexNumber from "./pokedexNumber.model";
import PokemonEggGroup from "./pokemonEggGroup.model";
import PokemonType from "./pokemonType.model";
import Encounter from "./encounter.model";

export default class Pokemon extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  species() {
    //this returns a lazy loaded species for the pokemon
    return this.has(Species, 'id', 'species_id');
  }

  abilities() {
    return this.has(PokemonAbility, 'ability_id', 'species_id');
  }

  pokedexNumbers() {
    return this.has(PokedexNumber, 'species_id', 'species_id');
  }

  eggGroups() {
    return this.has(PokemonEggGroup, 'species_id', 'species_id');
  }

  types() {
    return this.has(PokemonType, 'pokemon_id', 'species_id');
  }

  encounter() {
    return this.has(Encounter, 'pokemon_id', 'id')
  }

}

Pokemon.prototype.table = 'pokemon';
