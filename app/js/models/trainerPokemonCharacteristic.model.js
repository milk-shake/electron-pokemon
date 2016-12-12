import Model from "../lib/model";
import Characteristic from "./characteristic.model";
export default class TrainerPokemonCharacteristic extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
  }) {

    super(options);
  }

  characteristics() {
    return this.has(Characteristic, 'id', 'characteristic_id');
  }

}

TrainerPokemonCharacteristic.prototype.table = 'trainer_pokemon_characteristics';
