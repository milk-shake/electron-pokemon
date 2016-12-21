import Query from "./query";
//TODO update child attributes
//TODO update as transaction
//TODO hydratenewinstance should be static
export default class Model {
  constructor(options = {
    fillable: [],
    hidden: [],
    database: null
  }) {
    if (this.name === Model) {
      throw new Error("Model: Abstract class, please extend.");
    }

    if(!options.database) { throw new Error("Model: database not defined");}

    let _columns = [];
    let _hidden = [];
    let _wheres = [];
    let _withs = [];
    let _limitValue = null;
    let _offsetValue = null;
    let _attributes = {};
    let _database = null;
    let _query = new Query();
    let _relationshipQueries = [];

    let _jsonOnly = false;
    let _attributesOnly = false;
    let _initialWhere = false;

    Object.defineProperty(this, 'database', {
      enumerable: true,
      get() {
        return _database;
      }
    });

    Object.defineProperty(this, 'relationshipQueries', {
      enumerable: true,
      get() {
        return _relationshipQueries;
      }
    });

    Object.defineProperty(this, 'query', {
      enumerable: true,
      get() {
        return _query;
      }
    });

    Object.defineProperty(this, 'columns', {
      enumerable: true,
      get() {
        return _columns;
      }
    });

    Object.defineProperty(this, 'withs', {
      enumerable: true,
      get() {
        return _withs;
      }
    });

    Object.defineProperty(this, 'relationPromises', {
      enumerable: false,
      get() {
        return _relationPromises;
      }
    });

    Object.defineProperty(this, 'attributes', {
      enumerable: true,
      get() {
        return _attributes;
      }
    });

    Object.defineProperty(this, 'hidden', {
      enumerable: true,
      get() {
        return _hidden;
      }
    });

    Object.defineProperty(this, 'jsonOnly', {
      enumerable: true,
      get() {
        return _jsonOnly;
      },
      set(value) {
        //turn value into a bool
        _jsonOnly = !!value;
        //if value is true, don't return as attributes
        if(!!value) {
          this.attributesOnly = false;
        }
      }
    });

    Object.defineProperty(this, 'attributesOnly', {
      enumerable: true,
      get() {
        return _attributesOnly;
      },
      set(value) {
        _attributesOnly = !!value;
        //if value is true, don't return as json
        if(!!value) {
          this.jsonOnly = false;
        }
      }
    });

    Object.defineProperty(this, 'initialWhere', {
      enumerable: true,
      get() {
        return _initialWhere;
      },
      set(value) {
        _initialWhere = !!value;
      }
    });

    _database = options.database;
    _hidden = options.hidden;

    _columns = this.query.getColumnNames(options.database, this.table);
    if(!_columns.length) { _columns = "*"};
  }

  limit(value = null) {
    if(!value) { throw new Error('Model.limit: value not defined')}
    if(typeof value !== 'number') { throw new Error('Model.limit: value is not a number')}

    this.query.limit = value;

    return this;
  }

  offset(value) {
    if(!value) { throw new Error('Model.offset: value not defined')}
    if(typeof value !== 'number') { throw new Error('Model.offset: value is not a number')}

    this.query.offset = value;

    return this;
  }

  asJson() {
    this.jsonOnly = true;
    return this;
  }

  asAttributes() {
    this.attributesOnly = true;
    return this;
  }

  andWhere(column = null, predicate = null, value = undefined) {
    if(!column) { throw new Error('Model.andWhere: column not defined')}
    if(!predicate) { throw new Error('Model.andWhere: predicate is not defined')}
    if(value === undefined) { throw new Error('Model.andWhere: value is not defined')}

    this.query.buildWhere(column, predicate, 'AND', value);

    return this;
  }

  orWhere(column = null, predicate = null, value = undefined) {
    if(!column) { throw new Error('Model.orWhere: column not defined')}
    if(!predicate) { throw new Error('Model.orWhere: predicate is not defined')}
    if(value === undefined) { throw new Error('Model.orWhere: value is not defined')}

    this.query.buildWhere(column, predicate, 'OR', value);

    return this;
  }

  andWhereBetween(column = null, start = undefined, end = undefined) {
    if(!column) { throw new Error('Model.orWhereBetween: column not defined')}
    if(start === undefined) { throw new Error('Model.orWhereBetween: minimum value not defined')}
    if(end === undefined) { throw new Error('Model.orWhereBetween: maximum not defined')}

    this.query.buildWhereBetween(column, start, end, 'AND');

    return this;
  }

  orWhereBetween(column = null, start = undefined, end = undefined) {
    if(!column) { throw new Error('Model.orWhereBetween: column not defined')}
    if(start === undefined) { throw new Error('Model.orWhereBetween: minimum value not defined')}
    if(end === undefined) { throw new Error('Model.orWhereBetween: maximum not defined')}

    this.query.buildWhereBetween(column, start, end, 'OR');

    return this;
  }

  has(model = null, onColumn = null, rootColumn = null) {
    if(typeof model !== 'function') { throw new Error('Model.has: model is not a function/Class')}
    if(!onColumn) { throw new Error('Model.has: foreign column not passed')}
    if(typeof onColumn !== 'string') { throw new Error('Model.has: foreign column is not a string')}
    if(!rootColumn) { throw new Error('Model.has: this model column to join on not passed')}
    if(typeof rootColumn !== 'string') { throw new Error('Model.has: this model column to join on is not a string')}

    return {
      model: model,
      onColumn: onColumn,
      rootColumn: rootColumn
    };
  }

  with(name = null, callback) {
    if(!name) { throw new Error('Model.with: related model name is undefined');}
    if(typeof this[name] !== 'function') { throw new Error('Model.with: has relationship not defined on the model');}

    this.withs.push({
      name: name,
      callback: callback
    });

    return this;
  }

  static where(column = null, predicate = null, value = undefined) {
    if(!column) { throw new Error('Model.where: column not defined')}
    if(typeof column !== 'string') { throw new Error('Model.where: column is not string')}
    if(!predicate) { throw new Error('Model.where: predicate not defined')}
    if(value === undefined) { throw new Error('Model.where: value not defined')}


    let instance = new this();
    instance.query.buildWhere(column, predicate, null, value);
    instance.initialWhere = true;

    return instance;

  }

  static whereBetween(column = null, start = undefined, end = undefined) {
    if(!column) { throw new Error('Model.where: column not defined')}
    if(start === undefined) { throw new Error('Model.where: minimum value not defined')}
    if(end === undefined) { throw new Error('Model.where: maximum not defined')}

    let instance = new this();
    instance.query.buildWhereBetween(column, start, end, null);
    instance.initialWhere = true;

    return instance;
  }

  static find(id = null) {
    if(!id) { throw new Error('Model.find: no id defined')};
    if(typeof id !== 'number') { throw new Error('Model.find: id is not a number')}
    let instance = new this();
    instance.query.buildWhere('id', '=', null, id);
    instance.initialWhere = true;

    return instance;
  }

  static getColumns() {
    return Query.rawSync(`SELECT * FROM ${this.prototype.table} LIMIT 1`)[0].columns;
  }

  save() {
    var self = this;
    return new Promise(function(resolve, reject) {

      //if it has an id we're doing an update
      if(self.attributes.id) {
        self.query.buildWhere('id', '=', null, self.attributes.id);
        self.query.update({
          database: self.database,
          table: self.table,
          values: self.attributes
        });
        resolve();
      }
      //else we're creating a new one
      else {
        self.query.create({
          database: self.database,
          table: self.table,
          values: self.attributes
        });
        resolve();
      }

    });
  }

  updateAttribute(name = null, value = undefined) {
    let o = {};
    o[name] = value;
    this.hydrate(o);

    return this;
  }

  hydrate(values) {
    for(var att in values) {
      let name = att.split(".")[1] || att;
      if(this.columns.indexOf(name) > -1) {
        this.attributes[name] = values[att];
      }
    }

    return this;
  }

  //EXECUTION
  hydrateNewInstance(result = {}) {
    let instance = new this.constructor();

    for(var att in result) {
      let name = att.split(".")[1] || att;
      if(instance.columns.indexOf(name) > -1) {
        instance.updateAttribute(name, result[att]);
      }
    }

    return instance;
  }

  getAttributes() {
    return this.attributes;
  }

  getAttributesAsJson() {
    return JSON.stringify(this.attributes);
  }

  flatten() {
    let ret = {};
    for(var att in this.attributes) {
      if(this.attributes[att] instanceof Array) {
        ret[att] = [];
        this.attributes[att].forEach(function(sub) {
             ret[att].push(sub.flatten());
        });
      }
      else {
        ret[att] = this.attributes[att];
      }
    }
    return ret;
  }

  addRelationshipQuery(model = null, column = null, predicate = null, value = null, callback = null, asAttributes = false) {
    let currentRelationships = this.relationshipQueries;
    let query = model.where(column, predicate, value);

    if(callback) {
      callback(query);
    }

    if(asAttributes) {
      query.asAttributes();
    }

    currentRelationships.push(query.get());

  }

  get() {
    var self = this;
    if(!this.initialWhere) { throw new Error('Model.get: no where clause')}
    return new Promise(function(resolve, reject) {

      self.query.select({
        database: self.database,
        table: self.table,
        columns: self.columns,
        hidden: self.hidden,
      }).then(function(results) {
        let instances = [];
        let promises = [];
        let promiseTypes = [];

        results.forEach(function(result) {
            let build = self.hydrateNewInstance(result);

            if(self.withs.length) {
              self.withs.forEach(function(wit) {
                let hasModel = self[wit.name]();
                let asAttributes = self.jsonOnly || self.attributesOnly;
                self.addRelationshipQuery(hasModel.model, hasModel.onColumn, '=', result[`${self.table}.${hasModel.rootColumn}`], wit.callback, asAttributes);
                promiseTypes.push(hasModel.model.prototype.table)
              });
            }

            instances.push(build);
        });

        Promise.all(self.relationshipQueries).then(function(foreignResults) {
            //we only need to act if there are actual results
            if(foreignResults.length) {
              let instanceOffset = 0;
              let count = 0;
              let withLength = self.withs.length;

              //a bit archaic but this is a reasonable way to get the correct promise
              //result into the instance.
              //We can't resolve the instance until we build up all the related things requested,
              //and we have to use promise.all with all instances promises in to prevent a race condition between
              //resolving a qualified instance and resolving related models.
              for(let i = 0; i < foreignResults.length; i++) {
                if(count == withLength) {
                  count = 0;
                  instanceOffset++;
                }

                instances[instanceOffset].attributes[promiseTypes[count]] = foreignResults[i];

                count++;

              }
            }

            instances = instances.map(function(instance) {
              if(self.attributesOnly) {
                return instance.getAttributes();
              }
              if(self.jsonOnly) {
                return instance.getAttributesAsJson();
              }
              else {
                return instance;
              }
            });

           resolve(instances);
        });
      });
    });
  }
}
