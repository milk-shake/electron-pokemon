import Migration from "../lib/migration";

export default class BerryFirmnessNamesMigration extends Migration {

  constructor() {
    super();
  }

  up() {
    this.schema.create('berry_firmness_names', function(table) {

      table.integer('berry_firmness_id');
      table.integer('local_language_id');
      table.varchar('name');

    });
  }

  down() {
    this.schema.drop('berry_firmness_names');
  }

}
