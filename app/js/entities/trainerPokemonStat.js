import Stat from "./stat";
import StatController from "../controllers/statController";

//TODO THE create instance methods should be on the controller.


export default class TrainerPokemonStat extends Stat {

  static getInstance(options) {
    return new Promise(function(resolve, reject) {
      StatController.getById(options.statId, false)
      .then(function(stat) {
        resolve(new TrainerPokemonStat(options, stat));
      });
    });

  }

  static getInstanceByIdentifier(name, options) {
    return new Promise(function(resolve, reject) {
      StatController.getByIdentifier(name, false)
      .then(function(stat) {
        resolve(new TrainerPokemonStat(options, stat));
      })
    })
  }

  constructor(options, stat) {
    super(stat);

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
