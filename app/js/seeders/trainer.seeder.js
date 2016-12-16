import Seeder from '../lib/seeder';

export default class Trainer extends Seeder {

  constructor(options = {
    database: 'trainer_pokemon'
  }) {
    super(options);
  }

  seed() {
    this.schema.insert('trainer', [
      {"name": "dabby", "gender_id": 2, "language_id": 9}
    ]);
  }

}
