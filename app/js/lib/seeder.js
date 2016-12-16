import { Schema } from "./schema";

export default class Seeder {

  constructor(options = {
    database: null
  }) {
    this.schema = new Schema(options);
  }

}
