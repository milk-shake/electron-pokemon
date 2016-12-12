import Migration from "../lib/migration";

export default class AbilityFlavorTextMigration extends Migration {

  constructor() {
    super();
  }

  up() {
    this.schema.create('ability_flavor_text', function(table) {

      table.integer('ability_id');
      table.integer('version_group_id');
      table.integer('language_id');
      table.varchar('flavor_text');

    });
  }

  down() {
    this.schema.drop('ability_flavor_text');
  }

}
