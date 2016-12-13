const SQL = require('sql.js');
const fs = require('fs');

const dbname = 'pokemon';
const filebuffer = fs.readFileSync(dbname + '.sqlite');
const db = new SQL.Database(filebuffer);

export class Schema {

  static insert(tableName, values) {

    let columnNames = [];


    columnNames = Object.keys(values[0]);

    let clause = ` INSERT INTO ${tableName} `;
    clause += `(` + columnNames.join(', ') + `)`;
    clause += ` VALUES (:${columnNames.join(', :')})`;

    values.forEach(function(value) {
      let binds = {};

      for(var val in value) {
        binds[":" + val] = value[val];
      }

      let stmt = db.prepare(clause);
      stmt.getAsObject(binds);

      stmt.free();
    });

    let data = db.export();
    let buffer = new Buffer(data);
    fs.writeFileSync(dbname + '.sqlite', buffer);

  }

  static create(tableName, callback) {
    let table = new Table(tableName);
    callback(table);

    let statement = `
      CREATE TABLE ${tableName} (
        id integer PRIMARY KEY AUTOINCREMENT,
    `;
    for(var column in table.columns) {
      statement += table.columns[column] + ",";
    }

    statement = statement.substring(0, statement.length - 1);
    statement += ')';

    db.exec(statement);

    let data = db.export();
    let buffer = new Buffer(data);
    fs.writeFileSync(dbname + ".sqlite", buffer);

  }

  static createIfNotExists(tableName, callback) {
    let table = new Table(tableName);
    callback(table);

    let statement = `
      CREATE TABLE IF NOT EXISTS ${tableName} (
        id integer PRIMARY KEY AUTOINCREMENT,
    `;
    for(var column in table.columns) {
      statement += table.columns[column] + ",";
    }

    statement = statement.substring(0, statement.length - 1);
    statement += ')';

    db.exec(statement);

    let data = db.export();

    let buffer = new Buffer(data);
    fs.writeFileSync(dbname + ".sqlite", buffer);
  }

  static drop(tableName) {
    db.exec(`DROP TABLE ${tableName}`);
    let data = db.export();

    let buffer = new Buffer(data);
    fs.writeFileSync(dbname + ".sqlite", buffer);
  }

  static dropIfExists(tableName) {
    db.exec(`DROP TABLE IF EXISTS ${tableName}`);
    let data = db.export();

    let buffer = new Buffer(data);
    fs.writeFileSync(dbname + ".sqlite", buffer);
  }
}

export class Table {

  constructor(tableName) {
    this.columns = {};
  }

  integer(columnName, size = 128) {
    let self = this;
    let statement = ` ${columnName} integer(${size})`;

    this.columns[columnName] = statement;

    let def = function(value) {
      self.columns[columnName] += ` DEFAULT(${value})`
    }

    let notNull = function() {
      self.columns[columnName] += ` NOT NULL`;
    }

    return {
      notNull() {
        return {
          default: def
        }
      },
      default(value) {
        return {
          notNull: notNull
        }
      }
    }
  }

  varchar(columnName, size = 255) {
    let self = this;
    let statement = ` ${columnName} varchar(${size})`;
    this.columns[columnName] = statement;

    let def = function(value) {
      self.columns[columnName] += ` DEFAULT(${value})`
    }

    let notNull = function() {
      self.columns[columnName] += ` NOT NULL`;
    }

    return {
      notNull() {
        return {
          default: def
        }
      },
      default(value) {
        return {
          notNull: notNull
        }
      }
    }
  }

  blob(columnName, size = 255) {
    let self = this;
    let statement = ` ${columnName} blob(${size})`;
    this.columns[columnName] = statement;

    let def = function(value) {
      self.columns[columnName] += ` DEFAULT(${value})`
    }

    let notNull = function() {
      self.columns[columnName] += ` NOT NULL`;
    }

    return {
      notNull() {
        return {
          default: def
        }
      },
      default(value) {
        return {
          notNull: notNull
        }
      }
    }
  }

  char(columnName, size = 255) {
    let self = this;
    let statement = ` ${columnName} char(${size})`;
    this.columns[columnName] = statement;

    let def = function(value) {
      self.columns[columnName] += ` DEFAULT(${value})`
    }

    let notNull = function() {
      self.columns[columnName] += ` NOT NULL`;
    }

    return {
      notNull() {
        return {
          default: def
        }
      },
      default(value) {
        return {
          notNull: notNull
        }
      }
    }
  }

  double(columnName, size = 255) {
    let self = this;
    let statement = ` ${columnName} double(${size})`;
    this.columns[columnName] = statement;

    let def = function(value) {
      self.columns[columnName] += ` DEFAULT(${value})`
    }

    let notNull = function() {
      self.columns[columnName] += ` NOT NULL`;
    }

    return {
      notNull() {
        return {
          default: def
        }
      },
      default(value) {
        return {
          notNull: notNull
        }
      }
    }
  }

  float(columnName, size = 255) {
    let self = this;
    let statement = ` ${columnName} float(${size})`;
    this.columns[columnName] = statement;

    let def = function(value) {
      self.columns[columnName] += ` DEFAULT(${value})`
    }

    let notNull = function() {
      self.columns[columnName] += ` NOT NULL`;
    }

    return {
      notNull() {
        return {
          default: def
        }
      },
      default(value) {
        return {
          notNull: notNull
        }
      }
    }
  }

  nvarchar(columnName, size = 255) {
    let self = this;
    let statement = ` ${columnName} nvarchar(${size})`;
    this.columns[columnName] = statement;

    let def = function(value) {
      self.columns[columnName] += ` DEFAULT(${value})`
    }

    let notNull = function() {
      self.columns[columnName] += ` NOT NULL`;
    }

    return {
      notNull() {
        return {
          default: def
        }
      },
      default(value) {
        return {
          notNull: notNull
        }
      }
    }
  }

  text(columnName, size = 255) {
    let self = this;
    let statement = ` ${columnName} text(${size})`;
    this.columns[columnName] = statement;

    let def = function(value) {
      self.columns[columnName] += ` DEFAULT(${value})`
    }

    let notNull = function() {
      self.columns[columnName] += ` NOT NULL`;
    }

    return {
      notNull() {
        return {
          default: def
        }
      },
      default(value) {
        return {
          notNull: notNull
        }
      }
    }
  }
}
