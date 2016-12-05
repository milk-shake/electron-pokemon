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
  constructor(options) {
    super(PokemonController.getById(options.pokemonId));

    //API
    let _attack = null;
    let _defence = null;
    let _spAttack = null;
    let _spDefence = null;
    let _speed = null;
    let _evasion = null;
    let _hp = null;
    let _trainerPokemonId = null;
    let _level = null;
    let _nature = null;
    let _oT = null;
    let _ability = null;
    let _dateMet = null;
    let _levelMet = null;
    let _characteristic = null;
    let _knownMoves = null;
    let _gender = null;
    let _box = null;

    //Internal
    let _genderId = null;
    let _move1Id = null;
    let _move2Id = null;
    let _move3Id = null;
    let _move4Id = null;
    let _attackValue = null;
    let _defenceValue = null;
    let _spAttackValue = null;
    let _spDefenceValue = null;
    let _speedValue = null;
    let _hpValue = null;
    let _evasionValue = null;
    let _abilityId = null;
    let _characteristicId = null;
    let _potential = null;
    let _inGameId = null;
    let _isShiny = null;
    let _nickName = null;
    let _trainerName = null;
    let _boxId = null;


    let _statRating = null;
    let _attackRatingId = null;
    let _defenceRatingId = null;
    let _spAttackRatingId = null;
    let _spDefenceRatingId = null;
    let _hpRatingId = null;
    let _speedRatingId = null;

    let _natureId = null;
    let _potentialId = null;

    _trainerPokemonId = parseInt(options.trainerPokemonId) || null;
    _genderId = parseInt(options.genderId) || null;
    _move1Id = parseInt(options.move1Id) || null;
    _move2Id = parseInt(options.move2Id) || null;
    _move3Id = parseInt(options.move3Id) || null;
    _move4Id = parseInt(options.move4Id) || null;
    _level = parseInt(options.level) || null;
    _attackValue = parseInt(options.attack) || null;
    _defenceValue = parseInt(options.defence) || null;
    _spAttackValue = parseInt(options.spAttack) || null;
    _spDefenceValue = parseInt(options.spDefence) || null;
    _speedValue = parseInt(options.speed) || null;
    _hpValue = parseInt(options.hp) || null;
    _evasionValue = parseInt(options.evasion) || null;
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


    Object.defineProperty(this, 'knownMoves', {
      enumarable: true,
      get() {
        if(!_knownMoves) {
          _knownMoves = TrainerPokemonMoveController.getForPokemonId(_trainerPokemonId);

        }
        return _knownMoves;
      }
    });

    Object.defineProperty(this, 'gender', {
      enumerable: true,
      get() {
        if(!_gender) {
          _gender = GenderController.getById(_genderId);
        }
        return _gender;
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
        if(!_attack) {
          _attack = new TrainerPokemonStat({
            statId: 2,
            value: _attackValue
          });
        }
        return _attack;
      }
    });

    Object.defineProperty(this, 'defence', {
      enumarable: true,
      get() {
        if(!_defence) {
          _defence = new TrainerPokemonStat({
            statId: 3,
            value: _defenceValue
          });
        }
        return _defence;
      }
    });

    Object.defineProperty(this, 'spAttack', {
      enumarable: true,
      get() {
        if(!_spAttack) {
          _spAttack = new TrainerPokemonStat({
            statId: 4,
            value: _spAttackValue
          });
        }
        return _spAttack;
      }
    });

    Object.defineProperty(this, 'spDefence', {
      enumarable: true,
      get() {
        if(!_spDefence) {
          _spDefence = new TrainerPokemonStat({
            statId: 4,
            value: _spDefenceValue
          });
        }
        return _spDefence;
      }
    });

    Object.defineProperty(this, 'speed', {
      enumarable: true,
      get() {
        if(!_speed) {
          _speed = new TrainerPokemonStat({
            statId: 6,
            value: _speedValue
          });
        }
        return _speed;
      }
    });

    Object.defineProperty(this, 'hp', {
      enumarable: true,
      get() {
        if(!_hp) {
          _hp = new TrainerPokemonStat({
            statId: 1,
            value: _hpValue
          });
        }
        return _hp;
      }
    });

    Object.defineProperty(this, 'evasion', {
      enumarable: true,
      get() {
        if(!_evasion) {
          _evasion = new TrainerPokemonStat({
            statId: 8,
            value: _evasionValue
          });
        }
        return _evasion;
      }
    });

    Object.defineProperty(this, 'nature', {
      enumarable: true,
      get() {
        if(!_nature) {
          _nature = NatureController.getById(_natureId);
        }

        return _nature;
      }
    });

    Object.defineProperty(this, 'oT', {
      enumarable: true,
      get() {
        return _oT;
      }
    });

    Object.defineProperty(this, 'ability', {
      enumerable: true,
      get() {
        if(!_ability) {
          _ability = AbilityController.getById(_abilityId);
        }

        return _ability;
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

    Object.defineProperty(this, 'characteristic', {
      enumurable: true,
      get() {
        if(!_characteristic) {
          _characteristic = CharacteristicController.getById(_characteristicId);
        }

        return _characteristic;
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

    Object.defineProperty(this, 'box', {
      enumarable: true,
      get() {
        if(!_box) {
          _box = BoxController.getById(_boxId);
        }
        return _box;
      }
    });

  }

}
