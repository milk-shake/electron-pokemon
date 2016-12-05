const SQL = require('sql.js');
const fs = require('fs');

const dbname = "pokemon";
const filebuffer = fs.readFileSync(dbname + '.sqlite');
const db = new SQL.Database(filebuffer);

export function exec(statement) {
  let results = [];
  let contents = db.exec(statement);

  if(contents[0]) {
    for(let i = 0; i <= contents[0].values.length - 1; i++) {

      let result = {};
      for(let k = 0; k <= contents[0].values[i].length - 1; k++) {
        result[contents[0].columns[k]] = contents[0].values[i][k];
      }

      results.push(result);
    }
  }

  return results;
}

export function getById(id, statement) {
    let stmt = db.prepare(statement + " WHERE id=$id");
    let result = stmt.getAsObject({"$id": id});

    stmt.free();

    return result;
}
