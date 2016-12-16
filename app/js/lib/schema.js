import Database from "../databases";

export class Schema {

  constructor(options = {
    database: null,
  }) {

    let _databaseName = null;
    let _fileBuffer = null;
    let _sql = null;
    let _date = (new Date).getTime().toString();

    Object.defineProperty(this, 'databaseName', {
      enumerable: true,
      get() {
        return _databaseName;
      }
    });

    Object.defineProperty(this, 'sql', {
      enumerable: false,
      get() {
        return _sql;
      }
    });

    _databaseName = (options.database) ? options.database : _date;
  }

  insert(tableName, values) {

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

      let stmt = Database[this.databaseName].database.prepare(clause);
      stmt.getAsObject(binds);

      stmt.free();
    }, this);

    let data = Database[this.databaseName].database.export();
    let buffer = new Buffer(data);
    fs.writeFileSync(this.databaseName + '.sqlite', buffer);

  }

  create(tableName, callback) {
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

    this.sql.exec(statement);

    let data = Database[this.databaseName].database.export();
    let buffer = new Buffer(data);
    fs.writeFileSync(this.databaseName + ".sqlite", buffer);

  }

  createIfNotExists(tableName, callback) {
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

    this.sql.exec(statement);

    let data = Database[this.databaseName].database.export();

    let buffer = new Buffer(data);
    fs.writeFileSync(this.databaseName + ".sqlite", buffer);
  }

  drop(tableName) {
    this.sql.exec(`DROP TABLE ${tableName}`);
    let data = Database[this.databaseName].database.export();

    let buffer = new Buffer(data);
    fs.writeFileSync(this.databaseName + ".sqlite", buffer);
  }

  dropIfExists(tableName) {
    this.sql.exec(`DROP TABLE IF EXISTS ${tableName}`);
    let data = Database[this.databaseName].database.export();

    let buffer = new Buffer(data);
    fs.writeFileSync(this.databaseName + ".sqlite", buffer);
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
