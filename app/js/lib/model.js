import Query from "./query";
//TODO all the buildwhere and shit should be on query
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

    let _jsonOnly = false;
    let _attributesOnly = false;

    Object.defineProperty(this, 'database', {
      enumerable: true,
      get() {
        return _database;
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

    _database = options.database;
    _hidden = options.hidden;

    _columns = this.query.getColumnNames(this.database, this.table);
    if(!_columns.length) { _columns = "*"};
  }

  limit(value) {
    this.query.limitValue = value;

    return this;
  }

  offset(value) {
    this.query.offsetValue = value;

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
    if(!predicate) { throw new Error('Model.where: predicate not defined')}
    if(value === undefined) { throw new Error('Model.where: value not defined')}


    let instance = new this();
    instance.query.buildWhere(column, predicate, null, value);

    return instance;

  }

  static whereBetween(column = null, start = undefined, end = undefined) {
    if(!column) { throw new Error('Model.where: column not defined')}
    if(start === undefined) { throw new Error('Model.where: minimum value not defined')}
    if(end === undefined) { throw new Error('Model.where: maximum not defined')}

    let instance = new this();
    instance.query.buildWhereBetween(column, start, end, null);

    return instance;
  }

  static find(id = null) {
    if(!id) { throw new Error('Model.find: no id defined', this.name)};
    let instance = new this();
    instance.query.buildWhere('id', '=', null, id);

    return instance;
  }

  static getColumns() {
      return Query.rawSync(`SELECT * FROM ${this.prototype.table} LIMIT 1`)[0].columns;
  }

  static update(id, values) {
    var self = this;
    return new Promise(function(resolve, reject) {
      //get a model from the database, update it's values and save it.
      self.find(1).get()
      .then(function(instance) {
        if(instance.length) {
          instance = instance[0];
          instance.query.buildWhere('id', '=', null, instance.attributes.id);

          for(var val in values) {
            instance.addAttribute(val, values[val])
          }

          instance.query.update({
            database: instance.database,
            table: instance.table,
            wheres: instance.wheres,
            values: instance.attributes
          });
        }
      });
    });
  }


  //EXECUTION
  buildJson(result) {
    return JSON.stringify(result);
  }

  buildAttributes(result) {
    return result;
  }

  buildInstance(model, result) {
    let instance = new model();
    for(var att in result) {
      let name = att.split(".")[1];
      if(instance.columns.indexOf(name) > -1) {
        instance.addAttribute(name, result[att]);
      }
    }

    return instance;
  }

  buildResult(model = null, result = null) {

    let build = null;
    build = this.buildInstance(model, result);
    return build;
  }

  transformInstance(context, instance) {
    let attributes = instance;

    if(context.jsonOnly) {
      attributes = JSON.stringify(instance.attributes);
    }

    if(context.attributesOnly) {
      attributes = instance.attributes;
    }

    return attributes;
  }

  get() {
    var self = this;
    return new Promise(function(resolve, reject) {

      self.query.select({
        database: self.database,
        table: self.table,
        columns: self.columns,
        hidden: self.hidden,
        limit: self.limitValue,
        offset: self.offsetValue
      }).then(function(results) {

        let instances = [];
        let promises = [];
        let promiseTypes = [];

        results.forEach(function(result) {
            let build = self.buildResult(self.constructor, result);

            if(self.withs.length) {
              self.withs.forEach(function(wit) {
                if(typeof self[wit.name] == 'function') {
                  let hasModel = self[wit.name]();

                  let query = hasModel.model.where(hasModel.onColumn, "=", result[`${self.table}.${hasModel.rootColumn}`]);

                  if(wit.callback) {
                    wit.callback(query);
                  }

                  if(self.jsonOnly || self.attributesOnly) {
                    query.asAttributes();
                  }

                  promiseTypes.push(query.table);
                  promises.push(query.get());

                }

              });
            }

            instances.push(build);
        });

        Promise.all(promises).then(function(foreignResults) {
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
               return self.transformInstance(self, instance);
             });

             resolve(instances);
        });

      });
    });
  }

  save() {
    //stubbed - save a model instance
  }

  addAttribute(name = null, value = null) {
    this.attributes[name] = value;

    return this;
  }
}
