import Migration from "../lib/migration";

export default class AbilityProseMigration extends Migration {

  constructor() {
    super();
  }

  up() {
    this.schema.create('ability_prose', function(table) {

      table.integer('ability_id');
      table.integer('local_language_id');
      table.varchar('short_effect');
      table.varchar('effect');

    });
  }

  down() {
    this.schema.drop('ability_names');
  }

}
