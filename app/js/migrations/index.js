import AbilityMigration from "./abilities.migration";


export function runMigrations() {
  new AbilityMigration().up();
}
