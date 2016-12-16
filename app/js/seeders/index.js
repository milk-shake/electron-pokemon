import Trainer from "./trainer.seeder";
import TrainerPartyPokemonSeeder from "./TrainerPartyPokemon.seeder";
let seeds = [
  Trainer,
  TrainerPartyPokemonSeeder
]

export function runSeeders() {

  seeds.forEach(function(seed) {
    let s = new seed();
    s.seed();
    console.log(`Seed ${seed.name} finished`);
  });
}
