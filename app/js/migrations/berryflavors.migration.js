import Migration from "../lib/migration";

export default class BerryFlavorsMigration extends Migration {

  constructor() {
    super();
  }

  up() {
    this.schema.create('berry_flavors', function(table) {

      table.integer('berry_id');
      table.integer('contest_type_id');
      table.integer('flavor');

    });
  }

  down() {
    this.schema.drop('berry_flavors');
  }

}
