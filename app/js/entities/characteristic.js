export default class Characteristic {

  constructor(options) {

    let _id = null;
    let _message = null;
    let _statId = null;

    Object.defineProperty(this, 'id', {
      enumarable: true,
      get() {
        return _id;
      }
    });

    Object.defineProperty(this, 'message', {
      enumarable: true,
      get() {
        return _message;
      }
    });

    Object.defineProperty(this, 'statId', {
      get() {
        return _statId;
      }
    });

    _id = parseInt(options.id);
    _message = options.message;
    _statId = parseInt(options.statId);

    Object.freeze(this);
  }
}
