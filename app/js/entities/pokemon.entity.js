import PokemonController from "../controllers/pokemon.controller";

export default class Pokemon {


  static createFullInstance(options = {
    identifier: null,
    speciesId: null,
    height: null,
    weight: null,
    baseExperience: null,
    order: null,
    isDefault: null
  }) {


    let promises = [];

    promises.push(PokemonController.getNameForSpeciesId(options.speciesId));
    promises.push(PokemonController.getGenusForSpeciesId(options.speciesId));
    promises.push(PokemonController.getFlavorForSpeciesId(options.speciesId));
    promises.push(PokemonController.getProseForSpeciesId(options.speciesId));

    Promise.all(promises)
    .then(function(results) {
      options.name = (results[0][0]) ? results[0][0].name : null;
      options.genus = (results[1][0]) ? results[1][0].genus : null;
      options.flavor = (results[2][0]) ? results[2][0].flavor : null;
      options.prose = (results[3][0]) ? results[3][0].prose : null;

      resolve(new Pokemon(options));
    });


  }

  static createFullOptions(options = {
    identifier: null,
    speciesId: null,
    height: null,
    weight: null,
    baseExperience: null,
    order: null,
    isDefault: null
  }) {
    return new Promise(function(resolve, reject) {
      let promises = [];

      promises.push(PokemonController.getNameForSpeciesId(options.speciesId));
      promises.push(PokemonController.getGenusForSpeciesId(options.speciesId));
      promises.push(PokemonController.getFlavorForSpeciesId(options.speciesId));
      promises.push(PokemonController.getProseForSpeciesId(options.speciesId));

      Promise.all(promises)
      .then(function(results) {
        options.name = (results[0][0]) ? results[0][0].name : null;
        options.genus = (results[1][0]) ? results[1][0].genus : null;
        options.flavor = (results[2][0]) ? results[2][0].flavor : null;
        options.prose = (results[3][0]) ? results[3][0].prose : null;

        resolve(options);
      });
    });
  }

  constructor(options = {
    identifier: null,
    speciesId: null,
    height: null,
    weight: null,
    baseExperience: null,
    order: null,
    isDefault: null,
    name: null,
    genus: null,
    flavor: null,
    prose: null
  }) {
    let _identifier = options.identifier;
    let _speciesId = options.speciesId;
    let _height = options.height;
    let _weight = options.weight;
    let _baseExperience = options.baseExperience;
    let _order = options.order;
    let _isDefault = options.isDefault;
    let _name = options.name;
    let _flavor = options.flavor;
    let _prose = options.prose;
    let _genus = options.genus;

    Object.defineProperty(this, 'genus', {
      enumerable: true,
      get() {
        return _genus;
      }
    });

    Object.defineProperty(this, 'prose', {
      enumerable: true,
      get() {
        return _prose;
      }
    });

    Object.defineProperty(this, 'flavor', {
      enumerable: true,
      get() {
        return _flavor;
      }
    });

    Object.defineProperty(this, 'name', {
      enumerable: true,
      get() {
        return _name;
      }
    });

    Object.defineProperty(this, 'isDefault', {
      enumerable: true,
      get() {
        return _isDefault;
      }
    });

    Object.defineProperty(this, 'order', {
      enumerable: true,
      get() {
        return _order;
      }
    });

    Object.defineProperty(this, 'baseExperience', {
      enumerable: true,
      get() {
        return _baseExperience;
      }
    });

    Object.defineProperty(this, 'weight', {
      enumerable: true,
      get() {
        return _weight;
      }
    });

    Object.defineProperty(this, 'height', {
      enumerable: true,
      get() {
        return _height;
      }
    });

    Object.defineProperty(this, 'speciesId', {
      enumerable: true,
      get() {
        return _speciesId;
      }
    });

    Object.defineProperty(this, 'identifier', {
      enumerable: true,
      get() {
        return _identifier;
      }
    });

  }
}
