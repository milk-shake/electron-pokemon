import Migration from "../lib/migration";

export default class BerryFirmnessMigration extends Migration {

  constructor() {
    super();
  }

  up() {
    this.schema.create('berry_firmness', function(table) {

      table.varchar('identifier');

    });
  }

  down() {
    this.schema.drop('berry_firmness');
  }

}
