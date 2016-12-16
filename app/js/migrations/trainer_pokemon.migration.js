import Migration from "../lib/migration";

export default class TrainerPokemon extends Migration {

  constructor(options = {
    database: 'trainer_pokemon'
  }) {
    super(options);
  }

  up() {
    this.schema.createIfNotExists('trainer_pokemon', function(table) {
      table.varchar('nick_name');
      table.integer('trainer_id');
      table.integer('gender_id');
      table.integer('species_id');
      table.integer('ability_id');
      table.integer('characteristic_id');
      table.integer('nature_id');
      table.integer('level');
      table.integer('attack');
      table.integer('defence');
      table.integer('sp_attack');
      table.integer('sp_defence');
      table.integer('speed');
      table.integer('hp');
      table.integer('evasion');
      table.varchar('OT');
      table.varchar('date_met');
      table.varchar('level_met');
      table.integer('attack_rating_id');
      table.integer('defence_rating_id');
      table.integer('sp_attack_rating_id');
      table.integer('sp_defence_rating_id');
      table.integer('hp_rating_id');
      table.integer('speed_rating_id');
      table.integer('potential_id');
      table.integer('is_shiny');
      table.integer('is_workbench');
      table.integer('box_id');
      table.integer('held_item_id');

    });
  }

  down() {
    this.schema.dropIfExists('trainer_pokemon');
  }

}
