export default class Abilility {

  constructor(options) {

    let _name = null;
    let _id = null;
    let _effect = null;
    let _isHidden = null;
    let _slot = null;

    Object.defineProperty(this, 'name', {
      enumarable: true,
      get() {
        return _name;
      }
    });

    Object.defineProperty(this, 'id', {
      enumarable: true,
      get() {
        return _id;
      }
    });

    Object.defineProperty(this, 'effect', {
      enumarable: true,
      get() {
        return _effect;
      }
    });

    Object.defineProperty(this, 'isHidden', {
      enumarable: true,
      get() {
        return _isHidden;
      }
    });

    Object.defineProperty(this, 'slot', {
      enumarable: true,
      get() {
        return _slot;
      },
      set(value) {
        _slot = parseInt(value);
      }
    });

    _name = options.identifier || options.name;
    _id = parseInt(options.id);
    _effect = options.effect;
    _isHidden = !!options.is_hidden;
    _slot = parseInt(options.slot);

    Object.freeze(this);
  }


}
