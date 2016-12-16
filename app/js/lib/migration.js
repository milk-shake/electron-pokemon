import { Schema } from "./schema";

export default class Migration {

  constructor(options = {
    database: null
  }) {
    this.schema = new Schema({
      database: options.database,
      migration: this.constructor.name
    });
  }

  createMigrationsTable() {
    this.schema.createIfNotExists('migrations', function(table) {
      table.varchar('migration_name');
      table.varchar('migration_date');
    });
  }

  checkMigrationsTable() {
    let res = this.schema.sql.exec(`SELECT name FROM sqlite_master WHERE type='table' AND  name='migrations'`);
    return !!res.length;
  }

  checkMigrationHasRun() {
    let stmt = this.schema.sql.prepare("SELECT * FROM migrations WHERE migration_name=:name");
    let res = stmt.getAsObject({':name' : this.constructor.name});
    stmt.free();
    return !!res.length;
  }

  saveMigration() {
    this.schema.insert('migrations', [
      {"migration_name": this.constructor.name, "migration_date": (new Date).getTime().toString()}
    ]);
  }

}
