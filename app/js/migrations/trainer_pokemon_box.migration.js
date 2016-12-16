import Migration from "../lib/migration";

export default class TrainerPokemonBox extends Migration {

  constructor(options = {
    database: 'trainer_pokemon'
  }) {
    super(options);
  }

  up() {
    this.schema.createIfNotExists('trainer_pokemon_boxes', function(table) {
      table.varchar('name');
      table.integer('box_limit');
    });
  }

  down() {
    this.schema.dropIfExists('trainer_pokemon_boxes');
  }

}
