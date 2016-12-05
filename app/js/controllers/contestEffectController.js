import { exec, getById } from "../database/database";
import ContestEffect from "../entities/contestEffect";

export default class ContestEffectController {
  constructor() {}

  static getById(id, as_object = true) {
    let contestEffect = null;
    let results = getById(id, `
      SELECT t1.id, t1.appeal, t1.jam,
      t2.flavor_text as flavorText,
      t2.effect
      FROM contest_effects as t1
      INNER JOIN contest_effect_prose as t2 on t2.contest_effect_id = t1.id AND t2.local_language_id = 9
    `);

    if(results) {
      contestEffect = (as_object) ? new ContestEffect(results) : results;
    }

    return contestEffect;

  }
}
