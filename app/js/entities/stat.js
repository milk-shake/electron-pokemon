import DamageClassController from "../controllers/damageClassController";

export default class Stat {
  constructor(options) {
    let _id = null;
    let _damageClassId = null;
    let _isBattleOnly = null;
    let _name = null;
    let _damageClass = null;

    _id = parseInt(options.id) || null;
    _damageClassId = parseInt(options.damageClassId) || null;
    _isBattleOnly = parseInt(options.isBattleOnly) || 0;
    _name = options.name || "No name";

    Object.defineProperty(this, 'id', {
      enumarable: true,
      get() {
        return _id;
      }
    });

    Object.defineProperty(this, 'damageClass', {
      enumarable: true,
      get() {
        if(!_damageClass) {
          _damageClass = (_damageClassId) ? DamageClassController.getById(_damageClassId) : null;
        }
        return _damageClass
      }
    });

    Object.defineProperty(this, 'isBattleOnly', {
      enumarable: true,
      get() {
        return !!_isBattleOnly;
      }
    });

    Object.defineProperty(this, 'name', {
      enumarable: true,
      get() {
        return _name;
      }
    });

  }
}
