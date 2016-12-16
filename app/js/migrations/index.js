const SQL = require('sql.js');
const fs = require('fs');

import TrainerPokemonBox from "./trainer_pokemon_box.migration";
import TrainerPokemonMoves from "./trainer_pokemon_moves.migration";
import TrainerPokemon from "./trainer_pokemon.migration";
import Trainer from "./trainer.migration";

let migrations = [
  Trainer,
  TrainerPokemon,
  TrainerPokemonMoves,
  TrainerPokemonBox
]

//TODO make it so the migrations don't have to hit the database to check the table exists each iteration.

export function runMigrations() {
  migrations.forEach(function(migration) {
    let mig = new migration();

    if(!mig.checkMigrationsTable()) {
      mig.createMigrationsTable();
    }

    if(!mig.checkMigrationHasRun()) {
      mig.up();
      mig.saveMigration();
      console.log(`Migration ${migration.name} finished`);
    }
    else {
      console.warn(`Migration ${migration.name} already run`);
    }

  });
}

export function rollbackMigrations() {
  migrations.forEach(function(migration) {
    new Migration().down();
  });
}
