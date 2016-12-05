export default class Gender {
  constructor(options) {
    let _id = null;
    let _name = null;

    _id = parseInt(options.id) || null;
    _name = options.name || null;


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

  }
}
