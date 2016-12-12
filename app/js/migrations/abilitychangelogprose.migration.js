import Migration from "../lib/migration";

export default class AbilityChangelogProseMigration extends Migration {

  constructor() {
    super();
  }

  up() {
    this.schema.create('ability_changelog_prose', function(table) {

      table.integer('ability_changelog_id');
      table.integer('local_language_id');
      table.varchar('effect');

    });
  }

  down() {
    this.schema.drop('ability_changelog_prose');
  }

}
