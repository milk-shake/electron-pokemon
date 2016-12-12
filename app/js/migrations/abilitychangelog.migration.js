import Migration from "../lib/migration";

export default class AbilityChangelogMigration extends Migration {

  constructor() {
    super();
  }

  up() {
    this.schema.create('ability_changelog', function(table) {

      table.integer('ability_id');
      table.integer('changed_in_version_group_id');

    });
  }

  down() {
    this.schema.drop('ability_changelog');
  }

}
