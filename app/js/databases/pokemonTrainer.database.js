import Database from "../lib/database";

export default class TrainerPokemon extends Database {
  constructor(options = {
    name: "trainer_pokemon"
  })
  {
    super(options);
  }

}
