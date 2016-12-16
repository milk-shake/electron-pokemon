import Migration from "../lib/migration";

export default class Trainer extends Migration {

  constructor(options = {
    database: 'trainer_pokemon'
  }) {
    super(options);
  }

  up() {
    this.schema.createIfNotExists('trainer', function(table) {
      table.varchar('name');
      table.integer('gender_id');
      table.integer('language_id');
    });
  }

  down() {
    this.schema.dropIfExists('trainer');
  }

}
