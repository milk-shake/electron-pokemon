import Move from "./move";
import MoveController from "../controllers/moveController";
export default class TrainerPokemonMove extends Move {

  constructor(options) {
    super(MoveController.getById(options.moveId, false));

    let _pokemonId = null;
    let _moveId = null;
    let _slot = null;
    let _levelLearnt = null;

    _pokemonId = parseInt(options.pokemonId) || null;
    _moveId = parseInt(options.moveId) || null;
    _slot = parseInt(options.slot) || null;
    _levelLearnt = parseInt(options.levelLearnt) || null;

    Object.defineProperty(this, 'slot', {
      enumarable: true,
      get() {
        return _slot;
      }
    });

    Object.defineProperty(this, 'levelLearnt', {
      enumarable: true,
      get() {
        return _levelLearnt;
      }
    });

  }
}
