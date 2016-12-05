import Stat from "./stat";
import StatController from "../controllers/statController";

export default class PokemonStat extends Stat {
  constructor(options) {
    super(StatController.getById(options.statId, false));

    let _value = null;
    Object.defineProperty(this, 'value', {
      enumarable: true,
      get() {
        return _value;
      },
      set(value) {
        _value = value;
      }
    });

    _value = parseInt(options.value) || null;
  }
}
