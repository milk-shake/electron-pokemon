import Migration from "../lib/migration";

export default class TrainerPokemonMoves extends Migration {

  constructor(options = {
    database: 'trainer_pokemon'
  }) {
    super(options);
  }

  up() {
    this.schema.createIfNotExists('trainer_pokemon_moves', function(table) {
      table.integer('trainer_pokemon_id');
      table.integer('move_id');
      table.integer('slot');
      table.integer('level_learnt');
    });
  }

  down() {
    this.schema.dropIfExists('trainer_pokemon_moves');
  }

}
