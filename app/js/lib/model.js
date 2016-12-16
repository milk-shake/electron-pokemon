import Query from "./query";

const SQL = require('sql.js');
const fs = require('fs');

export default class Model {
  constructor(options = {
    fillable: [],
    hidden: [],
    database: null
  }) {

    if(!options.database) { throw new Error("Model: database not defined");}

    let _columns = [];
    let _hidden = [];
    let _wheres = [];
    let _withs = [];
    let _foreignKeys = [];
    let _limitValue = null;
    let _offsetValue = null;
    let _subQueries = [];
    let _attributes = {};
    let _database = null;

    let _jsonOnly = false;
    let _attributesOnly = false;

    Object.defineProperty(this, 'database', {
      enumerable: true,
      get() {
        return _database;
      }
    });

    Object.defineProperty(this, 'wheres', {
      enumerable: true,
      get() {
        return _wheres;
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

    Object.defineProperty(this, 'foreignKeyValues', {
      enumerable: false,
      get() {
        return _foreignKeyValues;
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

    Object.defineProperty(this, 'limitValue', {
      enumerable: false,
      get() {
        return _limitValue;
      },
      set(value) {
        _limitValue = parseInt(value);
      }
    });

    Object.defineProperty(this, 'offsetValue', {
      enumerable: false,
      get() {
        return _offsetValue;
      },
      set(value) {
        _offsetValue = parseInt(value);
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

    _columns = Query.getColumnNames(this.database, this.table);
    if(!_columns.length) { _columns = "*"};
  }


  buildWhere(column = null, predicate = null, operator = null, value = null) {
    let currentWheres = this.wheres;

    let whereClause = {};

    whereClause.column = column;
    whereClause.predicate = predicate;
    whereClause.value = value;
    whereClause.type = "WHERE";

    if(operator) {
      whereClause.operator = operator;
    }

    currentWheres.push(whereClause);
  }

  buildWhereBetween(column = null, start = null, end = null, operator = null) {
    let currentWheres = this.wheres;
    let whereClause = {};

    whereClause.column = column;
    whereClause.start = start;
    whereClause.end = end;
    whereClause.type = "BETWEEN";

    if(operator) {
      whereClause.operator = operator;
    }

    currentWheres.push(whereClause);
  }

  limit(value) {
    this.limitValue = value;

    return this;
  }

  offset(value) {
    this.offsetValue = value;

    return this;
  }

  asJson() {
    this.jsonOnly = true;

    return this;
  }

  toJson() {
    return JSON.stringify(this.attributes);
  }

  asAttributes() {
    this.attributesOnly = true;

    return this;
  }

  toAttributes() {
    return this.attributes;
  }

  andWhere(column = null, predicate = null, value = null) {

    this.buildWhere(column, predicate, 'AND', value);

    return this;
  }

  orWhere(column = null, predicate = null, value = null) {

    this.buildWhere(column, predicate, 'OR', value);

    return this;
  }

  andWhereBetween(column = null, predicate = null, value = null) {
    this.buildWhereBetween(column, predicate, value, 'AND');

    return this;
  }

  orWhereBetween(column = null, predicate = null, value = null) {
    this.buildWhereBetween(column, predicate, value, 'OR');

    return this;
  }

  has(model = null, onColumn = null, rootColumn = null) {
    return {
      model: model,
      onColumn: onColumn,
      rootColumn: rootColumn
    };
  }

  with(name = null, callback) {
    this.withs.push({
      name: name,
      callback: callback
    });

    return this;
  }

  static where(column = null, predicate = null, value = null) {

    let instance = new this();
    instance.buildWhere(column, predicate, null, value);

    return instance;

  }

  static whereBetween(column = null, start = null, end = null) {
    let instance = new this();
    instance.buildWhereBetween(column, start, end, null);

    return instance;
  }

  static find(id = null) {
    let instance = new this();
    instance.buildWhere('id', '=', null, id);

    return instance;
  }

  static getColumns() {
      return Query.rawSync(`SELECT * FROM ${this.prototype.table} LIMIT 1`)[0].columns;
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

      Query.select({
        database: self.database,
        table: self.table,
        columns: self.columns,
        wheres: self.wheres,
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

  addAttribute(name = null, value = null) {
    let attributes = this.attributes;
    attributes[name] = value;

    return this;
  }
}
