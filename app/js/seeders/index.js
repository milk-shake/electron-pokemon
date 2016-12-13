import TrainerPartyPokemonSeeder from "./trainerPartyPokemon.seeder";
import TrainerPartyPokemonSpeciesSeeder from "./trainerPartyPokemonSpecies.seeder";
import TrainerPokemonBox1Seeder from "./trainerPokemonBox1.seeder";
import TrainerPokemonBox1SpeciesSeeder from "./trainerPokemonBox1Species.seeder";
import TrainerPokemon1MoveSeeder from "./TrainerPokemon1Move.seeder";

export function runSeeders() {
  // new TrainerPartyPokemonSeeder().seed();
  // new TrainerPartyPokemonSpeciesSeeder().seed();
  // new TrainerPokemonBox1Seeder().seed();
  // new TrainerPokemonBox1SpeciesSeeder().seed();
  new TrainerPokemon1MoveSeeder().seed();
}
