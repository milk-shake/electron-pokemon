import Seeder from '../lib/seeder';

export default class TrainerPokemon1MoveSeeder extends Seeder {

  constructor() {
    super();
  }

  seed() {
    this.schema.insert('trainer_pokemon_moves', [
    {trainer_pokemon_id:1,move_id:567},
    {trainer_pokemon_id:1,move_id:272},
    {trainer_pokemon_id:1,move_id:99},
    {trainer_pokemon_id:1,move_id:301}
  ]);
  }

}
