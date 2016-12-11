import EvolutionController from "../controllers/evolutionController";

export default class Species {
  constructor(options) {
    let _id;
    let _name;
    let _generationId;
    let _colorId;
    let _shapeId;
    let _habitatId;
    let _genderRate;
    let _captureRate;
    let _baseHappiness;
    let _isBaby;
    let _hatchCounter;
    let _hasGenderDifferences;
    let _growthRateId;
    let _formsSwitchable;
    let _order;
    let _conquestOrder;
    let _flavor;
    let _prose;
    let _genus;

    //internal
    let _evolvesFromSpeciesId;
    let _evolutionChainId;

    _id = parseInt(options.id) || null;
    _name = options.name || null;
    _generationId = parseInt(options.generationId) || null;
    _evolvesFromSpeciesId = parseInt(options.evolvesFromSpeciesId) || null;
    _evolutionChainId = parseInt(options.evolutionChainId) || null;
    _colorId = parseInt(options.colorId) || null;
    _shapeId = parseInt(options.shapeId) || null;
    _habitatId = parseInt(options.habitatId) || null;
    _genderRate = parseInt(options.genderRate) || null;
    _captureRate = parseInt(options.captureRate) || null;
    _baseHappiness = parseInt(options.baseHappiness) || null;
    _isBaby = parseInt(options.isBaby) || null;
    _hatchCounter = parseInt(options.hatchCounter) || null;
    _hasGenderDifferences = !!options.hasGenderDifferences || null;
    _growthRateId = parseInt(options.growthRateId) || null;
    _formsSwitchable = !!options.formsSwitchable || null
    _conquestOrder = parseInt(options.conquestOrder) || null;
    _flavor = options.flavor || null;
    _prose = options.prose || null;
    _genus = options.genus || null;

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

    Object.defineProperty(this, 'evolvesFromSpecies', {
      enumarable: true,
      get() {
        return _evolvesFromSpeciesId;
      }
    });

    Object.defineProperty(this, 'evolutionChainId', {
      enumerable: false,
      get() {
        return _evolutionChainId;
      }
    });

    Object.defineProperty(this, 'flavorText', {
      enumarable: true,
      get() {
        return _flavor;
      }
    });

    Object.defineProperty(this, 'prose', {
      enumarable: true,
      get() {
        return _prose;
      }
    });
 }
}
