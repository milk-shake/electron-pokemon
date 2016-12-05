import TypeController from "../controllers/typeController";
import DamageClassController from "../controllers/damageClassController";
import ContestTypeController from "../controllers/contestTypeController";
import ContestEffectController from "../controllers/contestEffectController";
import SuperContestEffectController from "../controllers/superContestEffectController";
import StatController from "../controllers/statController";

export default class Move {

  constructor(options) {

    //Internal
    let _contestTypeId = null;
    let _damageClassId = null;
    let _typeId = null;
    let _contestEffectId = null;
    let _superContestEffectId = null;
    let _statChangeId = null;
    //Not made




    //API
    let _name = null;
    let _power = null;
    let _pp = null;
    let _accuracy = null;
    let _priority = null;
    let _effect = null;
    let _effectChance = null;
    let _contestType = null;
    let _contestEffect = null;
    let _superContestEffect = null;
    let _statChange = null;
    let _ailment = null;
    let _ailmentChance = null;
    let _minHits = null;
    let _maxHits = null;
    let _minTurns = null;
    let _maxTurns = null;
    let _drain = null;
    let _healing = null;
    let _critRate = null;
    let _flinchChance = null;
    let _statChance = null;
    let _battleStyle = null;
    let _damageClass = null;
    let _moveCategory = null;
    let _moveTarget = null;
    let _moveDescription = null;
    let _moveFlavor = null;
    let _type = null;



    Object.defineProperty(this, 'name', {
      enumarable: true,
      get() {
        return _name;
      }
    });

    Object.defineProperty(this, 'type', {
      enumarable: true,
      get() {
        if(!_type) {
          _type = TypeController.getById(_typeId);
        }

        return _type;
      }
    });

    Object.defineProperty(this, 'power', {
      enumarable: true,
      get() {
        return _power;
      }
    });

    Object.defineProperty(this, 'pp', {
      enumarable: true,
      get() {
        return _pp;
      }
    });

    Object.defineProperty(this, 'accuracy', {
      enumarable: true,
      get() {
        return _accuracy;
      }
    });

    Object.defineProperty(this, 'priority', {
      enumarable: true,
      get() {
        return _priority;
      }
    });

    Object.defineProperty(this, 'effect', {
      enumarable: true,
      get() {
        return _effect;
      }
    });

    Object.defineProperty(this, 'effectChance', {
      enumarable: true,
      get() {
        return _effectChance;
      }
    });

    Object.defineProperty(this, 'contestType', {
      enumarable: true,
      get() {
        if(!_contestType) {
          _contestType = ContestTypeController.getById(_contestTypeId);
        }
        return _contestType;
      }
    });

    Object.defineProperty(this, 'contestEffect', {
      enumarable: true,
      get() {
        if(!_contestEffect) {
          _contestEffect = ContestEffectController.getById(_contestEffectId);
        }
        return _contestEffect;
      }
    });

    Object.defineProperty(this, 'superContestEffect', {
      enumarable: true,
      get() {
        if(!_superContestEffect) {
          _superContestEffect = SuperContestEffectController.getById(_superContestEffectId);
        }
        return _superContestEffect;
      }
    });

    Object.defineProperty(this, 'statChange', {
      enumarable: true,
      get() {
        if(!_statChange) {
          _statChange = (_statChangeId) ? StatController.getById(_statChangeId) : null;
        }

        return _statChange;
      }
    });

    Object.defineProperty(this, 'ailment', {
      enumarable: true,
      get() {
        return _ailment;
      }
    });

    Object.defineProperty(this, 'ailmentChance', {
      enumarable: true,
      get() {
        return _ailmentChance;
      }
    });

    Object.defineProperty(this, 'hits', {
      enumarable: true,
      get() {
        return {
          min: _minHits,
          max: _maxHits
        }
      }
    });

    Object.defineProperty(this, 'turns', {
      enumarable: true,
      get() {
        return {
          min: _minTurns,
          max: _maxTurns
        }
      }
    });

    Object.defineProperty(this, 'drain', {
      enumarable: true,
      get() {
        return _drain;
      }
    });

    Object.defineProperty(this, 'healing', {
      enumarable: true,
      get() {
        return _healing;
      }
    });

    Object.defineProperty(this, 'critRate', {
      enumarable: true,
      get() {
        return _critRate;
      }
    });

    Object.defineProperty(this, 'flinchChance', {
      enumarable: true,
      get() {
        return _flinchChance;
      }
    });

    Object.defineProperty(this, 'statChance', {
      enumarable: true,
      get() {
        return _statChance;
      }
    });

    Object.defineProperty(this, 'battleStyle', {
      enumarable: true,
      get() {
        return _battleStyle;
      }
    });

    Object.defineProperty(this, 'damageClass', {
      enumarable: true,
      get() {
        if(!_damageClass) {
          _damageClass = DamageClassController.getById(_damageClassId);
        }

        return _damageClass;
      }
    });

    Object.defineProperty(this, 'moveCategory', {
      enumarable: true,
      get() {
        return _moveCategory;
      }
    });

    Object.defineProperty(this, 'moveTarget', {
      enumarable: true,
      get() {
        return _moveTarget;
      }
    });

    Object.defineProperty(this, 'moveDescription', {
      enumarable: true,
      get() {
        return _moveDescription;
      }
    });

    Object.defineProperty(this, 'moveFlavor', {
      enumarable: true,
      get() {
        return _moveFlavor;
      }
    });

    _name = options.identifier || options.name;
    _typeId = parseInt(options.typeId) || 0;
    _power = parseInt(options.power) || 0;
    _pp = parseInt(options.pp) || 0;
    _accuracy = parseInt(options.accuracy) || 0;
    _priority = parseInt(options.priority) || 0;
    _effect = options.effect;
    _effectChance = parseInt(options.effectChance) || 0;
    _contestTypeId = parseInt(options.contestTypeId) || 0;
    _contestEffectId = parseInt(options.contestEffectId) || 0;
    _superContestEffectId = parseInt(options.superContestEffectId) || 0;
    _statChangeId = parseInt(options.statChangeId) || 0;
    _ailment = options.ailment;
    _ailmentChance = parseInt(options.ailmentChance) || 0;
    _drain = parseInt(options.drain) || 0;
    _healing = parseInt(options.healing) || 0;
    _critRate = parseInt(options.critRate) || 0;
    _flinchChance = parseInt(options.flinchChance) || 0;
    _statChance = parseInt(options.statChance) || 0;
    _battleStyle = options.battleStyle;
    _damageClassId = parseInt(options.damageClassId) || 0;
    _moveCategory = options.moveCategory;
    _moveTarget = options.moveTarget;
    _moveDescription = options.moveDescription;
    _moveFlavor = options.moveFlavor;
    _minTurns = options.minTurns;
    _maxTurns = options.maxTurns;
    _minHits = options.minHits;
    _maxHits = options.maxHits;

  }
}
