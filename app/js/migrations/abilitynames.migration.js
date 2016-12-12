import Migration from "../lib/migration";

export default class AbilityNamesMigration extends Migration {

  constructor() {
    super();
  }

  up() {
    this.schema.create('ability_names', function(table) {

      table.integer('ability_id');
      table.integer('local_language_id');
      table.varchar('name');

    });
  }

  down() {
    this.schema.drop('ability_names');
  }

}
