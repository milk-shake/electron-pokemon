import Seeder from '../lib/seeder';

export default class TrainerPokemonSeeder extends Seeder {

  constructor() {
    super();
  }

  seed() {
    this.schema.insert('trainer_pokemon', [
      {trainer_id:1,gender_id:2,level:29,attack:141,defence:207,sp_attack:206,sp_defence:36,speed:84,hp:124,OT:'ctaylor0',date_met:'18/07/2014',level_met:2,is_shiny:0,nick_name:'lmyers0',evasion:148,box_id:18},
      {trainer_id:1,gender_id:2,level:65,attack:250,defence:84,sp_attack:130,sp_defence:181,speed:151,hp:99,OT:'sburton1',date_met:'09/11/2013',level_met:30,is_shiny:0,nick_name:'wwood1',evasion:222,box_id:18},
      {trainer_id:1,gender_id:2,level:91,attack:253,defence:47,sp_attack:43,sp_defence:116,speed:32,hp:76,OT:'tpierce2',date_met:'27/08/2014',level_met:23,is_shiny:1,nick_name:'cmatthews2',evasion:187,box_id:18},
      {trainer_id:1,gender_id:2,level:67,attack:28,defence:79,sp_attack:55,sp_defence:157,speed:6,hp:66,OT:'agonzales3',date_met:'04/12/2013',level_met:12,is_shiny:1,nick_name:'kgrant3',evasion:50,box_id:18},
      {trainer_id:1,gender_id:2,level:18,attack:211,defence:160,sp_attack:225,sp_defence:204,speed:162,hp:249,OT:'gduncan4',date_met:'27/07/2016',level_met:6,is_shiny:1,nick_name:'cdiaz4',evasion:186,box_id:18},
      {trainer_id:1,gender_id:2,level:39,attack:232,defence:204,sp_attack:72,sp_defence:124,speed:112,hp:175,OT:'dwilliamson5',date_met:'01/03/2015',level_met:5,is_shiny:1,nick_name:'sadams5',evasion:188,box_id:18}
  ]);
  }

}
