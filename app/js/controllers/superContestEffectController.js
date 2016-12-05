import { exec, getById } from "../database/database";
import SuperContestEffect from "../entities/superContestEffect";

export default class SuperContestEffectController {
  constructor() {}

  static getById(id, as_object = true) {
    let superContestEffect = null;
    let results = getById(id, `
      SELECT t1.id, t1.appeal,
      t2.flavor_text as flavorText
      FROM super_contest_effects as t1
      INNER JOIN super_contest_effect_prose as t2 on t2.super_contest_effect_id = t1.id AND t2.local_language_id = 9
    `);

    if(results) {
      superContestEffect = (as_object) ? new SuperContestEffect(results) : results;
    }

    return superContestEffect;

  }
}
