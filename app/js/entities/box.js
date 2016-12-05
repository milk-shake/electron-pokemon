export default class Box {

  constructor(options) {

    let _name = null;
    let _id = null;
    let _limit = null;

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

    Object.defineProperty(this, 'limit', {
      enumarable: true,
      get() {
        return _limit;
      }
    });

    _name = options.identifier || options.name;
    _id = parseInt(options.id) || null;
    _limit = parseInt(options.effect) || null;

    Object.freeze(this);
  }


}
