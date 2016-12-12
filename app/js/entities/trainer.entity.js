export default class Trainer {

  constructor(options = {
    id: null,
    name: null,
    genderId: null
  })
  {
    let _id = (options.id) ? parseInt(options.id) : null;
    let _name = (options.name) ? options.name : null;
    let _genderId = (options.genderId) ? parseInt(options.genderId) : null;


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

    Object.defineProperty(this, 'genderId', {
      enumerable: true,
      get() {
        return _genderId;
      }
    });
  }


}
