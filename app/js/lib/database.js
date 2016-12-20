const SQL = require('sql.js');
const fs = require('fs');

export default class Database  {
  constructor(options = {
    name: null
  }) {

    if(!options.name) { throw new Error("Database: name not defined")};

    let _database = null;
    let _databaseName = options.name;

    Object.defineProperty(this, 'database', {
      enumerable: true,
      get() {
        return _database;
      }
    });

    Object.defineProperty(this, 'databaseName', {
      enumerable: true,
      get() {
        return _databaseName;
      }
    });

    try {
      let fileBuffer = fs.readFileSync(options.name + '.sqlite');
      _database = new SQL.Database(fileBuffer);
    }
    catch (e) {
      if(e.code === 'ENOENT') {
        console.log('or here');
        console.warn('Schema: Database file not found, creating in memory database that will be written to file name: ' + options.database);
        _database = new SQL.Database();
      }
    }
  }

  save() {
    let data = this.database.export();
    let buffer = new Buffer(data);
    fs.writeFileSync(this.databaseName + '.sqlite', buffer);
  }
}
