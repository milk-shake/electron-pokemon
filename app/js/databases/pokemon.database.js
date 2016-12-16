import Database from "../lib/database";

export default class Pokemon extends Database {
  constructor(options = {
    name: "pokemon"
  })
  {
    super(options);
  }

}
