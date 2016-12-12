import TrainerPokemonController from "../controllers/trainerPokemon.controller";
import PokemonController from "../controllers/pokemon.controller";
import Pokemon from "./pokemon.entity";

export default class TrainerPokemon extends Pokemon {

  static createFullInstance(options = {
    attack: null,
    attackRatingId: null,
    boxId: null,
    dateMet: null,
    defence: null,
    defenceRatingId: null,
    evasion: null,
    genderId: null,
    hp: null,
    hpRatingId: null,
    id: null,
    isShiny: null,
    level: null,
    nickName: null,
    originalTrainer: null,
    potentialId: null,
    spAttack: null,
    spAttackRatingId: null,
    spDefence: null,
    specialDefenceRatingId: null,
    speedRatingId: null,
    speciesId: null,
    abilityId: null,
    natureId: null,
    characteristicId: null,
    moveIds: null
  }) {
    return new Promise(function(resolve, reject) {
      let promises = [];

      promises.push(TrainerPokemonController.getSpeciesIdForTrainerPokemonId(options.id));
      promises.push(TrainerPokemonController.getAbilityIdForTrainerPokemonId(options.id));
      promises.push(TrainerPokemonController.getNatureIdForTrainerPokemonId(options.id));
      promises.push(TrainerPokemonController.getCharacteristicIdForTrainerPokemonId(options.id));
      promises.push(TrainerPokemonController.getMoveIdsForTrainerPokemonId(options.id));

      Promise.all(promises)
      .then(function(results) {

        options.speciesId = results[0][0].speciesId;
        options.abilityId = results[1][0].abilityId;
        options.natureId = results[2][0].natureId;
        options.characteristicId = results[3][0].characteristicId;
        options.moveIds = results[4];

        PokemonController.getBySpeciesId(options.speciesId, false)
        .then(function(results) {
          let Pokemon = new TrainerPokemon(options, results[0]);
          resolve(Pokemon);
        });
      });
    });


  }

  constructor(
    options = {
      attack: null,
      attackRatingId: null,
      boxId: null,
      dateMet: null,
      defence: null,
      defenceRatingId: null,
      evasion: null,
      genderId: null,
      hp: null,
      hpRatingId: null,
      id: null,
      isShiny: null,
      level: null,
      nickName: null,
      originalTrainer: null,
      potentialId: null,
      spAttack: null,
      spAttackRatingId: null,
      spDefence: null,
      specialDefenceRatingId: null,
      speedRatingId: null,
      speciesId: null,
      abilityId: null,
      natureId: null,
      characteristicId: null,
      moveIds: null
  },
  pokemon = {
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
    super(pokemon);

    let _attack = options.attack;
    let _attackRatingId = options.attackRatingId;
    let _boxId = options.boxId;
    let _dateMet = options.dateMet;
    let _defence = options.defence;
    let _defenceRatingId = options.defenceRatingId;
    let _evasion = options.evasion;
    let _genderId = options.genderId;
    let _hp = options.hp;
    let _hpRatingId = options.hpRatingId;
    let _id = options.id;
    let _isShiny = options.isShiny;
    let _level = options.level;
    let _nickName = options.nickName;
    let _originalTrainer = options.originalTrainer;
    let _potentialId = options.potentialId;
    let _spAttack = options.spAttack;
    let _spAttackRatingId = options.spAttackRatingId;
    let _spDefence = options.spDefence;
    let _specialDefenceRatingId = options.specialDefenceRatingId;
    let _speedRatingId = options.speedRatingId;
    let _speciesId = options.speciesId;
    let _abilityId = options.abilityId;
    let _natureId = options.natureId;
    let _characteristicId = options.characteristicId;
    let _moveIds = options.moveIds;

    Object.defineProperty(this, 'moveIds', {
      enumerable: true,
      get() {
        return _moveIds;
      }
    });

    Object.defineProperty(this, 'characteristicId', {
      enumerable: true,
      get() {
        return _characteristicId;
      }
    });

    Object.defineProperty(this, 'natureId', {
      enumerable: true,
      get() {
        return _natureId;
      }
    });

    Object.defineProperty(this, 'abilityId', {
      enumerable: true,
      get() {
        return _abilityId;
      }
    });

    Object.defineProperty(this, 'speedRatingId', {
      enumerable: true,
      get() {
        return _speedRatingId;
      }
    });

    Object.defineProperty(this, 'specialDefenceRatingId', {
      enumerable: true,
      get() {
        return _specialDefenceRatingId;
      }
    });

    Object.defineProperty(this, 'spDefence', {
      enumerable: true,
      get() {
        return _spDefence;
      }
    });

    Object.defineProperty(this, 'spAttackRatingId', {
      enumerable: true,
      get() {
        return _spAttackRatingId;
      }
    });

    Object.defineProperty(this, 'spAttack', {
      enumerable: true,
      get() {
        return _spAttack;
      }
    });

    Object.defineProperty(this, 'potentialId', {
      enumerable: true,
      get() {
        return _potentialId;
      }
    });

    Object.defineProperty(this, 'originalTrainer', {
      enumerable: true,
      get() {
        return _originalTrainer;
      }
    });

    Object.defineProperty(this, 'nickName', {
      enumerable: true,
      get() {
        return _nickName;
      }
    });

    Object.defineProperty(this, 'level', {
      enumerable: true,
      get() {
        return _level;
      }
    });

    Object.defineProperty(this, 'isShiny', {
      enumerable: true,
      get() {
        return _isShiny;
      }
    });

    Object.defineProperty(this, 'id', {
      enumerable: true,
      get() {
        return _id;
      }
    });

    Object.defineProperty(this, 'hpRatingID', {
      enumerable: true,
      get() {
        return _hpRatingId;
      }
    });

    Object.defineProperty(this, 'hp', {
      enumerable: true,
      get() {
        return _hp;
      }
    });

    Object.defineProperty(this, 'genderId', {
      enumerable: true,
      get() {
        return _genderId;
      }
    });

    Object.defineProperty(this, 'evasion', {
      enumerable: true,
      get() {
        return _evasion;
      }
    });

    Object.defineProperty(this, 'defenceRatingId', {
      enumerable: true,
      get() {
        return _defenceRatingId;
      }
    });

    Object.defineProperty(this, 'defence', {
      enumerable: true,
      get() {
        return _defence;
      }
    });

    Object.defineProperty(this, 'dateMet', {
      enumerable: true,
      get() {
        return _dateMet;
      }
    });

    Object.defineProperty(this, 'boxId', {
      enumerable: true,
      get() {
        return _boxId;
      }
    });

    Object.defineProperty(this, 'attackRatingId', {
      enumerable: true,
      get() {
        return _attackRatingId;
      }
    });

    Object.defineProperty(this, 'attack', {
      enumerable: true,
      get() {
        return _attack;
      }
    });
  }

}
