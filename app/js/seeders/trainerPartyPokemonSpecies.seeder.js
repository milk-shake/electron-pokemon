import Seeder from '../lib/seeder';

export default class TrainerPokemonSpeciesSeeder extends Seeder {

  constructor() {
    super();
  }

  seed() {
    this.schema.insert('trainer_pokemon_species', [
      {trainer_pokemon_id:1,species_id:27},
      {trainer_pokemon_id:2,species_id:555},
      {trainer_pokemon_id:3,species_id:232},
      {trainer_pokemon_id:4,species_id:568},
      {trainer_pokemon_id:5,species_id:97},
      {trainer_pokemon_id:6,species_id:380}
    ]);
  }

}
