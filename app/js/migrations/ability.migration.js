import Migration from "../lib/migration";

export default class AbilityMigration extends Migration {

  constructor() {
    super();
  }

  up() {
    this.schema.create('abilities', function(table) {

      table.varchar('identifier');
      table.integer('generation_id');
      table.integer('is_main_series');

    });
  }

  down() {
    this.schema.drop('abilities');
  }

}
