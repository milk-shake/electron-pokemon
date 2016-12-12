import Query from "./query";

let table = null;
let query = null;

export default class Model {

  constructor(options = {
    fillable: [],
  }) {

    let _fillable = options.fillable;
    let _attributes = {};

    let _query = query = new Query();

    Object.defineProperty(this, 'fillable', {
      enumerable: true,
      get() {
        return _fillable;
      }
    });

    Object.defineProperty(this, 'hidden', {
      enumerable: true,
      get() {
        return _hidden;
      }
    });

    Object.defineProperty(this, 'query', {
      enumerable: true,
      get() {
        return _query;
      }
    });

    Object.defineProperty(this, 'attributes', {
      enumerable: true,
      get() {
        return _attributes;
      }
    })

    this.query.setTable(this.table);

  }

  static where(column = null, predicate = null, value = null) {
    if(!column)   { throw new Error('Model::where: No column name')};
    if(!predicate) { throw new Error('Model::where: No predicate')};
    if(!value)    { throw new Error('Model::where: No value')};

    let instance = new this();

    instance.query.where({
      column: column,
      predicate: predicate,
      value: value,
      operator: ''
    });

    return instance;
  }

  static find(id = null) {
    if(!id) { throw new Error('Model::find: No id')};

    let instance = new this();

    instance.query.where({
      column: 'id',
      predicate: '=',
      value: id,
      operator: ''
    });

    return instance;
  }

  getAttribute(name = null) {
    if(!name) { throw new Error('Model.getAttribute: No name')};
    return this.attributes[name];
  }

  setAttribute(name = null, value = null) {
    if(!name)   { throw new Error('Model.setAttribute: No name')};

    this.attributes[name] = value;
  }

  andWhere(column = null, predicate = null, value = null) {
    if(!column)   { throw new Error('Model.andWhere: No column name')};
    if(!predicate) { throw new Error('Model.andWhere: No predicate')};
    if(!value)    { throw new Error('Model.andWhere: No value')};

    this.query.where({
      column: column,
      predicate: predicate,
      value: value,
      operator: 'AND'
    });

    return this;
  }

  orWhere(column = null, predicate = null, value = null) {
    if(!column)   { throw new Error('Model.orWhere: No column name')};
    if(!predicate) { throw new Error('Model.orWhere: No predicate')};
    if(!value)    { throw new Error('Model.orWhere: No value')};

    this.query.where({
      column: column,
      predicate: predicate,
      value: value,
      operator: 'OR'
    });

    return this;
  }

  get() {
    let self = this;
    return new Promise(function(resolve, reject) {
      self.query.select().then(function(results) {
        let instances = [];

        results.forEach(function(result) {
          let instance = new self.constructor();
          instance.hydrate(result);
          instances.push(instance);
        });
        resolve(instances);
      });
    });
  }


  has(model = null, column = null, on = 'id') {
    if(!model) { console.error("Model.hasOne: no model")};
    if(!column) { console.error("Model.hasOne: no column")};

    this.query.addRelation({
      model: model,
      join: column,
      on: on
    });

    return model;

  }

  hasWith(model = null, column = null, on = 'id', andWith = null) {

  }

  with(model = null, subWiths) {
    var self = this;
    if(!model) { console.error("Model.with: no model name")};

    if(subWiths) {
      let currentModel = this[model]();
      subWiths.with.forEach(function(subwith) {
        self.query.addSubWith({
          model: currentModel,
          with: subwith
        });
      });
    }
    else {
      this[model]();
    }

    return this;
  }

  save() {
    if(this.attributes.id) { throw new Error("Model.save: id found, use update instead")};
    return this.query.insert(this.attributes);
  }


  hydrate(attributes = {}) {
    for(var att in attributes) {
      this.setAttribute(att, attributes[att]);
    }
  }

  logSql() {
    this.query.logOutput();
    return this;
  }
}
