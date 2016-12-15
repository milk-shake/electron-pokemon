const SQL = require('sql.js');
const fs = require('fs');

const dbName = 'pokemon';
const filebuffer = fs.readFileSync(dbName + '.sqlite');
const db = new SQL.Database(filebuffer);


export default class Query {
  constructor() {

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

    console.log(clause.operator);

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
    return columns.filter(function(column) {
      return !hidden.includes(column);
    })
    .map(function(column) {
      return `${table}.'${column}' AS "${table}.${column}"`;
    });
  }

  static select(options = {
    table: null,
    columns: [],
    wheres: [],
    joins: [],
    hidden: [],
    limit: null,
    offset: null
  }) {
    return new Promise(function(resolve, reject) {
      if(!options.table) { throw new Error('Query.where: no table name')};


      //BUILD SELECT

      let rootSelect = Query.buildSelect(options.table, options.columns, options.hidden);

      let query = `SELECT`;
      query += ` ${rootSelect} `;
      query += ` FROM ${options.table}`;

      //WHERE BUILD
      let binds = {};
      options.wheres.forEach(function(clause, index) {
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

      if(options.limit) {
        query += ` LIMIT ${options.limit}`;
      }

      if(options.offset) {
        query += ` OFFSET ${options.offset}`;
      }

      // console.log(query);
      // console.log(binds);

      //DATABASE EXECUTION
      let stmt = db.prepare(query);
      stmt.bind(binds);

      let results = [];

      while(stmt.step()) {
        var row = stmt.getAsObject();
        results.push(row);
      }

      resolve(results);

    });
  }

  static raw(sql = null) {
    return new Promise(function(resolve, reject) {
      let results = db.exec(sql);
      resolve(results);
    });
  }

  static rawSync(sql = null) {
    return db.exec(sql);
  }
}
