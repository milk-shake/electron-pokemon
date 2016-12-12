import Migration from "../lib/migration";

export default class BerriesMigration extends Migration {

  constructor() {
    super();
  }

  up() {
    this.schema.create('berries', function(table) {

      table.integer('item_id');
      table.integer('firmness_id');
      table.integer('natural_gift_power');
      table.integer('natural_gift_type_id');
      table.integer('size');
      table.integer('max_harvest');
      table.integer('growth_time');
      table.integer('soil_dryness');
      table.integer('smoothness');

    });
  }

  down() {
    this.schema.drop('berries');
  }

}
