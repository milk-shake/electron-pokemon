import Databases from "../databases";
const fs = require('fs');
export default class Query {
  constructor() {

    let _wheres = [];
    let _limit = null;
    let _offset = null;

    Object.defineProperty(this, 'wheres', {
      enumerable: true,
      get() {
        return _wheres;
      }
    });

    Object.defineProperty(this, 'limit', {
      enumerable: false,
      get() {
        return _limit;
      },
      set(value) {
        _limit = parseInt(value);
      }
    });

    Object.defineProperty(this, 'offset', {
      enumerable: false,
      get() {
        return _offset;
      },
      set(value) {
        _offset = parseInt(value);
      }
    });
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

  static allowablePredicates() {
    return ['=', '!=', '>', '<', 'like'];
  }

  static buildWhere(table, clause, index = 0, binds = null) {
    let query = '';

    if(clause.operator) {
      query += ` ${clause.operator}`;
    }
    else {
      query += ` WHERE`;
    }

    let bind = `:${table}_${clause.column}_${index}`;
    binds[":" + table + "_" + clause.column + "_" + index] = clause.value;

    query += ` ${table}.${clause.column} ${clause.predicate} ${bind}`;

    return query;
  }

  static buildWhereBetween(table, clause, index = 0, binds = null) {
    let query = '';

    if(clause.operator) {
      query += ` ${clause.operator}`;
    }
    else {
      query += ` WHERE`;
    }

    let bindStart = `:${table}_${clause.column}_start_${index}`;
    let bindEnd = `:${table}_${clause.column}_end_${index}`;

    binds[":" + table + "_" + clause.column + "_start_" + index] = clause.start;
    binds[":" + table + "_" + clause.column + "_end_" + index] = clause.end;

    query += ` ${table}.${clause.column} BETWEEN ${bindStart} AND ${bindEnd}`;

    return query;
  }

  static buildSelect(table = null, columns = [], hidden = [], ) {
    if(typeof columns !== "string") {
      return columns.filter(function(column) {
        return !hidden.includes(column);
      })
      .map(function(column) {
        return `${table}.'${column}' AS "${table}.${column}"`;
      });
    }
    else {
      return columns;
    }

  }

  static buildUpdate(values = null, binds = null) {
    let query = ` SET `;
    for(var val in values) {
      let bind = `:${val}`;
      binds[bind] = values[val];
      query += ` ${val} = ${bind},`
    }

    return query.slice(0, -1);
  }

  create(options = {
    database: null,
    table: null,
    values: null
  }) {
    return new Promise(function(resolve, reject) {
      //stub
      resolve();
    });
  }

  update(options = {
    database: null,
    table: null,
    values: null
  }) {
    let self = this;
    return new Promise(function(resolve, reject) {
      if(!options.table) { throw new Error('Query.update: no table name')};

      let query = `UPDATE`;
      let binds = {};

      query += ` ${options.table}`;
      query += ` ${Query.buildUpdate(options.values, binds)}`;


      self.wheres.forEach(function(clause, index) {
        switch(clause.type) {
          case "WHERE": {
            query += Query.buildWhere(options.table, clause, index, binds);
            break;
          }
          case "BETWEEN": {
            query += Query.buildWhereBetween(options.table, clause, index, binds);
            break;
          }
          default: {
            break;
          }
        }

      });

      let stmt = Databases[options.database].database.prepare(query, binds);
      stmt.bind(binds);
      let result = stmt.run();

      let data = Databases[options.database].database.export();
      let buffer = new Buffer(data);
      fs.writeFileSync(options.database + '.sqlite', buffer);
      resolve();
    });
  }

  select(options = {
    database: null,
    table: null,
    columns: [],
    joins: [],
    hidden: []
  }) {
    let self = this;
    return new Promise(function(resolve, reject) {
      if(!options.table) { throw new Error('Query.where: no table name')};


      //BUILD SELECT

      let rootSelect = Query.buildSelect(options.table, options.columns, options.hidden);

      let query = `SELECT`;
      query += ` ${rootSelect} `;
      query += ` FROM ${options.table}`;

      //WHERE BUILD
      let binds = {};
      self.wheres.forEach(function(clause, index) {
        switch(clause.type) {
          case "WHERE": {
            query += Query.buildWhere(options.table, clause, index, binds);
            break;
          }
          case "BETWEEN": {
            query += Query.buildWhereBetween(options.table, clause, index, binds);
            break;
          }
          default: {
            break;
          }
        }

      });

      if(self.limit) {
        query += ` LIMIT ${options.limit}`;
      }

      if(self.offset) {
        query += ` OFFSET ${options.offset}`;
      }

      // console.log(query);
      // console.log(binds);

      //DATABASE EXECUTION
      let stmt = Databases[options.database].database.prepare(query);
      try {
        stmt.bind(binds);
      }
      catch(e) {
        // console.log(query);
        console.log(e);
      }


      let results = [];

      while(stmt.step()) {
        var row = stmt.getAsObject();
        results.push(row);
      }

      resolve(results);

    });
  }

  static raw(db, sql = null) {
    return new Promise(function(resolve, reject) {
      let results = Databases[db].database.exec(sql);
      resolve(results);
    });
  }

  static rawSync(db, sql = null) {
    return Databases[db].database.exec(sql);
  }

  getColumnNames(db, table) {
    var stmt = Databases[db].database.prepare(`SELECT * FROM ${table}`);
    stmt.step()
    return stmt.getColumnNames();
  }
}
