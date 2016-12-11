import Pokemon from "./pokemon";
import PokemonController from "../controllers/pokemonController";
import NatureController from "../controllers/natureController";
import CharacteristicController from "../controllers/characteristicController";
import TrainerPokemonMoveController from "../controllers/trainerPokemonMoveController";
import BoxController from "../controllers/boxController";
import AbilityController from "../controllers/abilityController";
import TrainerPokemonStat from "../entities/trainerPokemonStat";
import GenderController from "../controllers/genderController";


export default class TrainerPokemon extends Pokemon {

  static getInstance(options) {
    return new Promise(function(resolve, reject) {
      PokemonController.getById(options.pokemonId, false)
      .then(function(genericPokemon) {
        resolve(new TrainerPokemon(options, genericPokemon));
      });
    });

  }

  constructor(options, genericPokemon) {
    super(genericPokemon);

    let _hp = null;
    let _trainerPokemonId = null;
    let _level = null;
    let _oT = null;
    let _dateMet = null;
    let _levelMet = null;
    let _genderId = null;
    let _boxId = null;
    let _natureId = null;

    let _move1Id = null;
    let _move2Id = null;
    let _move3Id = null;
    let _move4Id = null;
    let _attack = null;
    let _defence = null;
    let _spAttack = null;
    let _spDefence = null;
    let _speed = null;
    let _evasion = null;
    let _abilityId = null;
    let _characteristicId = null;
    let _potential = null;
    let _inGameId = null;
    let _isShiny = null;
    let _nickName = null;
    let _trainerName = null;



    let _statRating = null;
    let _attackRatingId = null;
    let _defenceRatingId = null;
    let _spAttackRatingId = null;
    let _spDefenceRatingId = null;
    let _hpRatingId = null;
    let _speedRatingId = null;
    let _potentialId = null;

    _trainerPokemonId = parseInt(options.trainerPokemonId) || null;
    _genderId = parseInt(options.genderId) || null;
    _move1Id = parseInt(options.move1Id) || null;
    _move2Id = parseInt(options.move2Id) || null;
    _move3Id = parseInt(options.move3Id) || null;
    _move4Id = parseInt(options.move4Id) || null;
    _level = parseInt(options.level) || null;
    _attack = parseInt(options.attack) || null;
    _defence = parseInt(options.defence) || null;
    _spAttack = parseInt(options.spAttack) || null;
    _spDefence= parseInt(options.spDefence) || null;
    _speed = parseInt(options.speed) || null;
    _hp = parseInt(options.hp) || null;
    _evasion = parseInt(options.evasion) || null;
    _natureId = parseInt(options.natureId) || null;
    _oT = options.oT || null;
    _abilityId = parseInt(options.abilityId) || null;
    _dateMet = options.dateMet;
    _levelMet = parseInt(options.levelMet) || null;
    _characteristicId = parseInt(options.characteristicId) || null;
    _attackRatingId = parseInt(options.attackRatingId) || null;
    _defenceRatingId = parseInt(options.defenceRatingId) || null;
    _spAttackRatingId = parseInt(options.spAttackRatingId) || null;
    _spDefenceRatingId = parseInt(options.spDefenceRatingId) || null;
    _hpRatingId = parseInt(options.hpRatingId) || null;
    _speedRatingId = parseInt(options.speedRatingId) || null;
    _potentialId = parseInt(options.potentialID) || null;
    _inGameId = parseInt(options.inGameId) || null;
    _isShiny = !!options.isShiny;
    _nickName = options.nickName;
    _trainerName = options.trainerName || "No trainer";
    _boxId = options.boxId;

    Object.defineProperty(this, 'move1Id', {
      enumerable: true,
      get() {
        return _move1Id;
      }
    });

    Object.defineProperty(this, 'move2Id', {
      enumerable: true,
      get() {
        return _move2Id;
      }
    });

    Object.defineProperty(this, 'move3Id', {
      enumerable: true,
      get() {
        return _move3Id;
      }
    });

    Object.defineProperty(this, 'move4Id', {
      enumerable: true,
      get() {
        return _move4Id;
      }
    });

    Object.defineProperty(this, 'level', {
      enumerable: true,
      get() {
        return _level;
      }
    });

    Object.defineProperty(this, 'attack', {
      enumarable: true,
      get() {
        return _attack;
      }
    });

    Object.defineProperty(this, 'defence', {
      enumarable: true,
      get() {
        return _defence;
      }
    });

    Object.defineProperty(this, 'spAttack', {
      enumarable: true,
      get() {
        return _spAttack;
      }
    });

    Object.defineProperty(this, 'spDefence', {
      enumarable: true,
      get() {
        return _spDefence;
      }
    });

    Object.defineProperty(this, 'speed', {
      enumarable: true,
      get() {
        return _speed;
      }
    });

    Object.defineProperty(this, 'hp', {
      enumarable: true,
      get() {
        return _hp;
      }
    });

    Object.defineProperty(this, 'evasion', {
      enumarable: true,
      get() {
        return _evasion;
      }
    });

    Object.defineProperty(this, 'natureId', {
      enumarable: true,
      get() {
        return _natureId;
      }
    });

    Object.defineProperty(this, 'oT', {
      enumarable: true,
      get() {
        return _oT;
      }
    });

    Object.defineProperty(this, 'abilityId', {
      enumerable: true,
      get() {
        return _abilityId;
      }
    });

    Object.defineProperty(this, 'dateMet', {
      enumarable: true,
      get() {
        return _dateMet;
      }
    });

    Object.defineProperty(this, 'levelMet', {
      enumarable: true,
      get() {
        return _levelMet;
      }
    });

    Object.defineProperty(this, 'characteristicId', {
      enumurable: true,
      get() {
        return _characteristicId;
      }
    });

    Object.defineProperty(this, 'statRating', {
      enumarable: true,
      get() {
        if(!_statRating) {
          _statRating = {};
          _statRating.attack = (_attackRatingId) ? _attackRatingId : null;
          _statRating.defence = (_defenceRatingId) ? _defenceRatingId : null;
          _statRating.spAttack = (_spAttackRatingId) ? _spAttackRatingId : null;
          _statRating.spDefence = (_spDefenceRatingId) ? _spDefenceRatingId : null;
          _statRating.hp = (_hpRatingId) ? _hpRatingId : null;
          _statRating.speed = (_speedRatingId) ? _speedRatingId : null;
        }
      }
    });

    Object.defineProperty(this, 'potential', {
      enumarable: true,
      get() {
        if(!_potential) {
          _potential = (_potentialId) ? _potentialId : null;
        }
      }
    });

    Object.defineProperty(this, 'pokeId', {
      enumarable: true,
      get() {
        return _inGameId;
      }
    });

    Object.defineProperty(this, 'shiny', {
      enumarable: true,
      get() {
        return _isShiny || false;
      }
    });

    Object.defineProperty(this, 'nickName', {
      enumarable: true,
      get() {
        return _nickName;
      },
      set(value) {
        _nickName = value;
      }
    });

    Object.defineProperty(this, 'trainerName', {
      enumarable: true,
      get() {
        return _trainerName;
      }
    });

    Object.defineProperty(this, 'trainerPokemonId', {
      enumarable: true,
      get() {
        return _trainerPokemonId
      }
    });

    Object.defineProperty(this, 'genderId', {
      enumarable: true,
      get() {
        return _genderId
      }
    });

  }

}
