export default class Nature {
  constructor(options) {

    let _id = null;
    let _decreasedStatId = null;
    let _increasedStatId = null;
    let _hatesFlavorId = null;
    let _likesFlavorId = null;
    let _name = null;

    Object.defineProperty(this, 'id', {
      enumarable: true,
      get() {
        return _id;
      }
    });

    Object.defineProperty(this, 'decreasedStatId', {
      enumerable: true,
      get() {
        return _decreasedStatId;
      }
    });

    Object.defineProperty(this, 'increasedStatId', {
      enumerable: true,
      get() {
        return _increasedStatId;
      }
    });

    Object.defineProperty(this, 'hatesFlavorId', {
      enumerable: true,
      get() {
        return _hatesFlavorId;
      }
    });

    Object.defineProperty(this, 'likesFlavorId', {
      enumerable: true,
      get() {
        return _likesFlavorId;
      }
    });

    Object.defineProperty(this, 'name', {
      enumerable: true,
      get() {
        return _name;
      }
    });

    _id = parseInt(options.id) || null;
    _decreasedStatId = parseInt(options.decreasedStatId) || null;
    _increasedStatId = parseInt(options.increasedStatId) || null;
    _hatesFlavorId = parseInt(options.hatesFlavorId) || null;
    _likesFlavorId = parseInt(options.likesFlavorId) || null;
    _name = options.name || null;

  }
}
