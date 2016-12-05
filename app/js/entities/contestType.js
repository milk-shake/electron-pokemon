export default class ContestType {
  constructor(options) {

    let _id = null;
    let _name = null;
    let _berryFlavor = null;
    let _color = null;

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

    Object.defineProperty(this, 'berryFlavor', {
      enumerable: true,
      get() {
        return _berryFlavor;
      }
    });

    Object.defineProperty(this, 'color', {
      enumerable: true,
      get() {
        return _color;
      }
    });

    _id = parseInt(options.id) || null;
    _name = options.name || "No name";
    _berryFlavor = options.berryFlavor || "No flavor";
    _color = options.color || "No color";

    Object.seal(this);
  }
}
