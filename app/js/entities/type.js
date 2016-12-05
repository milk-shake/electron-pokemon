export default class Type {
  constructor(options) {

    let _id = null;
    let _name = null;
    let _damageClassId = null;

    Object.defineProperty(this, 'id', {
      enumarable: true,
      get() {
        return _id;
      }
    });

    Object.defineProperty(this, 'name', {
      enumarable: true,
      get() {
        return _name;
      }
    });

    Object.defineProperty(this, 'damageClassId', {
      enumarable: true,
      get() {
        return _damageClassId;
      }
    });

    _id = parseInt(options.id) || null;
    _name = options.name;
    _damageClassId = parseInt(options.damageClassId) || null;

    Object.seal(this);
  }
}
