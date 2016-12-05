export default class DamageClass {
  constructor(options) {
    let _id = null;
    let _name = null;
    let _description = null;

    Object.defineProperty(this, 'id', {
      enumerable: true,
      get() {
        return _id;
      }
    });

    Object.defineProperty(this, 'name', {
      enumerable: true,
      get() {
        return _name;
      }
    });

    Object.defineProperty(this, 'description', {
      enumerable: true,
      get() {
        return _description;
      }
    });

    _id = parseInt(options.id) || null;
    _name = options.name || "Unknown";
    _description || "No description";
  }
}
