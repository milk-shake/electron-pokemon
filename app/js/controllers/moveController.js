import { exec, getById } from "../database/database";
import Move from "../entities/move";

export default class MoveController {
  constructor() {}

  static getById(id, asObject = true) {
    let move = null;
    let results = exec(`
      SELECT
      t1.id, t1.type_id as typeId, t1.power, t1.pp, t1.accuracy, t1.priority, t1.target_id as targetId, t1.effect_id as effectId, t1.effect_chance as effectChance, t1.contest_type_id as contestTypeId, t1.contest_effect_id as contestEffectId, t1.super_contest_effect_id as superContestEffectId, t1.damage_class_id as damageClassId,
      t2.name,
      t3.meta_ailment_id as ailmentId, t3.min_hits as minHits, t3.max_hits as maxHits, t3.min_turns as minTurns, t3.max_turns as maxTurns, t3.drain, t3.healing, t3.crit_rate as critRate, t3.ailment_chance as ailmentChance, t3.flinch_chance as flinchChance, t3.stat_chance as statChance,
      t4.description as moveDescription,
      t5.flavor_text as moveFlavor,
      t6.stat_id as statChangeId, t6.change as statChange,
      t8.description as moveTarget,
      t9.effect,
      t10.name as ailment
      FROM moves as t1
      LEFT JOIN move_names as t2 ON t1.id = t2.move_id and t2.local_language_id = 9
      LEFT JOIN move_meta as t3 ON t1.id = t3.move_id
      LEFT JOIN move_meta_category_prose as t4 on t4.move_meta_category_id = t3.meta_category_id
      LEFT JOIN move_flavor_text as t5 on t5.move_id = t1.id AND t5.language_id = 9 AND t5.version_group_id = 16
      LEFT JOIN move_meta_stat_changes as t6 on t6.move_id = t1.id
      LEFT JOIN move_target_prose as t8 on t8.move_target_id = t1.target_id AND t8.local_language_id = 9
      LEFT JOIN move_effect_prose as t9 on t1.effect_id = t9.move_effect_id
      LEFT JOIN move_meta_ailment_names as t10 on t10.move_meta_ailment_id = t3.meta_ailment_id AND t10.local_language_id = 9
      WHERE t1.id =` + id);

    if(results.length) {
      move = (asObject) ? new Move(results[0]) : results[0];
    }

    return move;

  }

  static getForPokemonId(pokemonId) {
    let moves = [];
    let pokemonMoves = exec(`
      SELECT t1.id, t1.type_id as typeId, t1.power, t1.pp, t1.accuracy, t1.priority, t1.target_id as targetId, t1.effect_chance as effectChance, t1.contest_type_id as contestTypeId, t1.contest_effect_id as contestEffectId, t1.super_contest_effect_id as superContestEffectId,
      t2.name,
      t3.min_hits as minHits, t3.max_hits as maxHits, t3.min_turns as minTurns, t3.max_turns as maxTurns, t3.drain, t3.healing, t3.crit_rate as critRate, t3.ailment_chance as ailmentChance, t3.flinch_chance as flinchChance, t3.stat_chance as statChance,
      t4.description as moveDescription,
      t5.flavor_text as moveFlavor,
      t6.stat_id as statChangeId, t6.change as statChange,
      t7.name as damageClass,
      t8.description as moveTarget,
      t9.effect,
      t10.name as ailment,
      t0.level as levelLearnt,
      FROM pokemon_moves as t0
      LEFT JOIN moves as t1 ON t0.move_id = t1.id
      LEFT JOIN move_names as t2 ON t1.id = t2.move_id and t2.local_language_id = 9
      LEFT JOIN move_meta as t3 ON t1.id = t3.move_id
      LEFT JOIN move_meta_category_prose as t4 on t4.move_meta_category_id = t3.meta_category_id
      LEFT JOIN move_flavor_text as t5 on t5.move_id = t1.id AND t5.language_id = 9 AND t5.version_group_id = 16
      LEFT JOIN move_meta_stat_changes as t6 on t6.move_id = t1.id
      LEFT JOIN move_damage_class_prose as t7 on t7.move_damage_class_id = t1.damage_class_id AND t7.local_language_id = 9
      LEFT JOIN move_target_prose as t8 on t8.move_target_id = t1.target_id AND t8.local_language_id = 9
      LEFT JOIN move_effect_prose as t9 on t1.effect_id = t9.move_effect_id
      LEFT JOIN move_meta_ailment_names as t10 on t10.move_meta_ailment_id = t3.meta_ailment_id AND t10.local_language_id = 9
      WHERE t0.pokemon_id = ` + pokemonId);
    pokemonMoves.forEach(function(pokemonMove) {
      moves.push(new Move(pokemonMove));
    });

    return moves;
  }
}
