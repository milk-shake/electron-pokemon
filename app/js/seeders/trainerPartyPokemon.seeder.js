import Seeder from '../lib/seeder';

export default class TrainerPartyPokemonSeeder extends Seeder {

  constructor(options = {
    database: 'trainer_pokemon'
  }) {
    super(options);
  }

  seed() {
    this.schema.insert('trainer_pokemon', [
      {nick_name:"kchapman0",trainer_id:1,gender_id:1,species_id:489,ability_id:42,characteristic_id:20,nature_id:16,attack:24,defence:154,sp_attack:92,sp_defence:255,speed:81,hp:87,evasion:249,OT:"aramirez0",date_met:"24/03/2010","level_met":74,attack_rating_id:2,defence_rating_id:1,sp_attack_rating_id:4,sp_defence_rating_id:2,hp_rating_id:4,speed_rating_id:3,potential_id:3,is_shiny:1,is_workbench:0,box_id:18,held_item_id:null},
      {nick_name:"mwilson1",trainer_id:1,gender_id:2,species_id:542,ability_id:101,characteristic_id:14,nature_id:21,attack:245,defence:32,sp_attack:134,sp_defence:10,speed:246,hp:36,evasion:2,OT:"tboyd1",date_met:"01/02/2009","level_met":49,attack_rating_id:4,defence_rating_id:4,sp_attack_rating_id:1,sp_defence_rating_id:2,hp_rating_id:2,speed_rating_id:2,potential_id:4,is_shiny:0,is_workbench:0,box_id:18,held_item_id:null},
      {nick_name:"thenderson2",trainer_id:1,gender_id:2,species_id:176,ability_id:85,characteristic_id:20,nature_id:18,attack:10,defence:159,sp_attack:211,sp_defence:205,speed:209,hp:159,evasion:9,OT:"rcarr2",date_met:"01/12/2004","level_met":5,attack_rating_id:3,defence_rating_id:4,sp_attack_rating_id:1,sp_defence_rating_id:4,hp_rating_id:1,speed_rating_id:1,potential_id:4,is_shiny:1,is_workbench:0,box_id:18,held_item_id:338},
      {nick_name:"ggarcia3",trainer_id:1,gender_id:1,species_id:416,ability_id:24,characteristic_id:15,nature_id:10,attack:75,defence:187,sp_attack:161,sp_defence:95,speed:200,hp:130,evasion:238,OT:"pweaver3",date_met:"30/01/2008","level_met":63,attack_rating_id:2,defence_rating_id:2,sp_attack_rating_id:2,sp_defence_rating_id:4,hp_rating_id:3,speed_rating_id:4,potential_id:4,is_shiny:1,is_workbench:0,box_id:18,held_item_id:null},
      {nick_name:"gmorgan4",trainer_id:1,gender_id:3,species_id:227,ability_id:174,characteristic_id:22,nature_id:3,attack:202,defence:225,sp_attack:61,sp_defence:23,speed:3,hp:156,evasion:253,OT:"srivera4",date_met:"14/08/2009","level_met":76,attack_rating_id:1,defence_rating_id:1,sp_attack_rating_id:3,sp_defence_rating_id:2,hp_rating_id:4,speed_rating_id:4,potential_id:2,is_shiny:0,is_workbench:0,box_id:18,held_item_id:null},
      {nick_name:"dperry5",trainer_id:1,gender_id:3,species_id:675,ability_id:191,characteristic_id:17,nature_id:12,attack:253,defence:43,sp_attack:194,sp_defence:89,speed:167,hp:155,evasion:106,OT:"mprice5",date_met:"26/03/2012","level_met":55,attack_rating_id:2,defence_rating_id:2,sp_attack_rating_id:1,sp_defence_rating_id:2,hp_rating_id:1,speed_rating_id:3,potential_id:1,is_shiny:1,is_workbench:0,box_id:18,held_item_id:null}
  ]);
  }

}
