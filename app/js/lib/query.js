const SQL = require('sql.js');
const fs = require('fs');

const dbName = 'pokemon';
const filebuffer = fs.readFileSync(dbName + '.sqlite');
const db = new SQL.Database(filebuffer);

export default class Query {

  constructor() {
    let _table = null;
    let _wheres = [];
    let _joins = [];
    let _binds = [];
    let _subWiths = [];
    let _outputToLog = false;
    let _relations = [];

    Object.defineProperty(this, 'table', {
      enumerable: false,
      get() {
        return _table;
      },
      set(value) {
        _table = value;
      }
    });

    Object.defineProperty(this, 'wheres', {
      enumerable: false,
      get() {
        return _wheres;
      }
    });

    Object.defineProperty(this, 'joins', {
      enumerable: false,
      get() {
        return _joins;
      }
    });

    Object.defineProperty(this, 'binds', {
      enumerable: false,
      get() {
        return _binds;
      }
    });

    Object.defineProperty(this, 'outputToLog', {
      enumerable: true,
      get() {
        return _outputToLog;
      },
      set(value = false) {
        _outputToLog = !!value;
      }
    });

    Object.defineProperty(this, 'relations', {
      enumerable: true,
      get() {
        return _relations;
      }
    });

    Object.defineProperty(this, 'subWiths', {
      enumerable: true,
      get() {
        return _subWiths;
      }
    })

  }

  setTable(table = null) {
    this.table = table;
  }

  addSubWith(subWith = {
    model: null,
    with: null
  }) {
    let currentSubwiths = this.subWiths;
    currentSubwiths.push(subWith);
  }

  addWhere(where = null) {
    let currentWheres = this.wheres;
    this.wheres.push(where);
  }

  addJoin(join = null) {
    let currentJoins = this.joins;
    this.joins.push(join);
  }

  addRelation(relation = {
    model: null,
    join: null,
    on: null
  }) {
    let currentRelations = this.relations;
    this.relations.push(relation);
  }

  addBind(bind = null) {
    let currentBinds = this.binds;
    this.binds.push(bind);
  }

  where(clause = {
    column: null,
    predicate: null,
    value: null,
    operator: null
  }) {
    if(!clause.column)     { throw new Error('Query.select: No column')};
    if(!clause.predicate)  { throw new Error('Query.select: No predicate')};
    if(!clause.value)      { throw new Error('Query.select: No value')};


    let createdClause = "";

    if(clause.operator) {
      createdClause += `${clause.operator} ${this.table}.${clause.column} ${clause.predicate} :${clause.column + this.binds.length}`;
    }
    else {
      createdClause += `WHERE ${this.table}.${clause.column} ${clause.predicate} :${clause.column + this.binds.length}`;
    }

    this.addWhere(createdClause);

    let bind = {};
    bind[":"+ clause.column + this.binds.length] = clause.value;

    this.addBind(bind);

  }

  join(clause = {
    table: null,
    join: null,
    on: null
  }) {
    if(!clause.table)     { throw new Error('Query.join: No table')};
    if(!clause.join)  { throw new Error('Query.join: No join')};
    if(!clause.on)      { throw new Error('Query.join: No on')};

    let createdClause = "";

    createdClause += `LEFT JOIN ${clause.table} ON ${clause.table}.${clause.on} = ${this.table}.${clause.join}`;

    this.joins.push(createdClause);


  }

  insert(attributes) {
    let self = this;
    return new Promise(function(resolve, reject) {
      let clause = `INSERT INTO ${self.table}`;
      let columnNames = [];
      let columnValues = [];
      let binds = {};

      for(var att in attributes) {
        columnNames.push(att);
        columnValues.push(attributes[att]);
        binds[":" + att] = attributes[att];
      }

      clause += `(` + columnNames.join(', ') + `)`;
      clause += ` VALUES (:${columnNames.join(', :')})`;


      let stmt = db.prepare(clause);
      stmt.getAsObject(binds);

      stmt.free();

      let data = db.export();
      let buffer = new Buffer(data);
      fs.writeFileSync(dbName + '.sqlite', buffer);



      resolve();


    });
  }

  select() {
    let self = this;
    return new Promise(function(resolve, reject) {

      let results = [];

      let clause = `SELECT * from ${self.table}`;

      self.joins.forEach(function(join) {
        clause += " " + join;
      });

      self.wheres.forEach(function(where) {
        clause += " " + where;
      });

      let stmt = db.prepare(clause);

      let binds = {};
      self.binds.forEach(function(bind) {
        binds[Object.keys(bind)[0]] = bind[Object.keys(bind)[0]];
      });

      stmt.bind(binds);

      let relationPromises = [];

      while(stmt.step()) {
        var row = stmt.getAsObject();
        if(self.relations.length) {
          self.relations.forEach(function(relation) {
            let query = relation.model.where(relation.join, "=", row[relation.on]);
            if(self.subWiths.length) {
              self.subWiths.forEach(function(subwith) {
                if(relation.model == subwith.model) {
                  query.with(subwith.with);
                }
              });
            }
            relationPromises.push(query.get());
          });
        }
        results.push(row);
      }

      if(relationPromises.length) {
        Promise.all(relationPromises).then(function(promiseResults) {
          let index = 0;
          let count = 0;
          promiseResults.forEach(function(result) {
            if(count === self.relations.length) {
              count = 0;
              index = index + 1;
            }
            result.forEach(function(subresult) {
              results[index][subresult.constructor.name.toLowerCase()] = results[index][subresult.constructor.name.toLowerCase()] || [];
              results[index][subresult.constructor.name.toLowerCase()].push(subresult);
            });

            count++;

          });
          stmt.free();
          if(self.outputToLog) {
            console.log("Query.select", clause, binds);
          }
          resolve(results);
        });
      }
      else {
        stmt.free();
        if(self.outputToLog) {
          console.log("Query.select", clause, binds);
        }
        resolve(results);
      }
    });
  }

  logOutput() {
    this.outputToLog = true;
  }


}
