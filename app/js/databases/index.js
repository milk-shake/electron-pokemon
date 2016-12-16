import TrainerPokemon from "./pokemonTrainer.database";
import Pokemon from "./pokemon.database";

let databases = [
  TrainerPokemon,
  Pokemon
];

let databaseExports = {};

databases.forEach(function(database) {
  let d = new database();
  databaseExports[d.databaseName] = d;
});

export default databaseExports;
