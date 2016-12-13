import Seeder from '../lib/seeder';

export default class TrainerPokemonBox1SpeciesSeeder extends Seeder {

  constructor() {
    super();
  }

  seed() {
    this.schema.insert('trainer_pokemon_species', [
      {trainer_pokemon_id:7,species_id:374},
      {trainer_pokemon_id:8,species_id:194},
      {trainer_pokemon_id:9,species_id:237},
      {trainer_pokemon_id:10,species_id:20},
      {trainer_pokemon_id:11,species_id:561},
      {trainer_pokemon_id:12,species_id:570},
      {trainer_pokemon_id:13,species_id:75},
      {trainer_pokemon_id:14,species_id:367},
      {trainer_pokemon_id:15,species_id:509},
      {trainer_pokemon_id:16,species_id:389},
      {trainer_pokemon_id:17,species_id:67},
      {trainer_pokemon_id:18,species_id:400},
      {trainer_pokemon_id:19,species_id:552},
      {trainer_pokemon_id:20,species_id:647},
      {trainer_pokemon_id:21,species_id:701},
      {trainer_pokemon_id:22,species_id:328},
      {trainer_pokemon_id:23,species_id:475},
      {trainer_pokemon_id:24,species_id:639},
      {trainer_pokemon_id:25,species_id:408},
      {trainer_pokemon_id:26,species_id:209},
      {trainer_pokemon_id:27,species_id:559},
      {trainer_pokemon_id:28,species_id:232},
      {trainer_pokemon_id:29,species_id:633},
      {trainer_pokemon_id:30,species_id:81},
      {trainer_pokemon_id:31,species_id:370},
      {trainer_pokemon_id:32,species_id:339},
      {trainer_pokemon_id:33,species_id:508},
      {trainer_pokemon_id:34,species_id:156},
      {trainer_pokemon_id:35,species_id:20},
      {trainer_pokemon_id:36,species_id:350}
    ]);
  }

}
