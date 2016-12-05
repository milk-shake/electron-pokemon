export default class ContestEffect {
  constructor(options) {

    let _id = null;
    let _appeal = null;
    let _jam = null;
    let _flavorText = null;
    let _effect = null;

    Object.defineProperty(this, 'id', {
      enumarable: true,
      get() {
        return _id;
      }
    });

    Object.defineProperty(this, 'appeal', {
      enumarable: true,
      get() {
        return _appeal;
      }
    });

    Object.defineProperty(this, 'jam', {
      enumarable: true,
      get() {
        return _jam;
      }
    });

    Object.defineProperty(this, 'flavorText', {
      enumarable: true,
      get() {
        return _flavorText;
      }
    });

    Object.defineProperty(this, 'effect', {
      enumarable: true,
      get() {
        return _effect;
      }
    });

    _id = parseInt(options.id) || null;
    _appeal = parseInt(options.appeal) || null;
    _jam = parseInt(options.jam) || null;
    _flavorText = options.flavorText || "No flavor text";
    _effect = options.effect || "No effect text";

    Object.seal(this);
  }
}
