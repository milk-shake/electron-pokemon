
import Model from "../lib/model";
import AbilityFlavorText from "./abilityFlavorText.model";
import AbilityName from "./abilityName.model";
import AbilityProse from "./abilityProse.model";
import BerryFirmnessName from "./berryFirmnessName.model";
import CharacteristicText from "./characteristicText.model";
import ContestEffectProse from "./contestEffectProse.model";
import ContestTypeName from "./contestTypeName.model";
import EggGroupProse from "./eggGroupProse.model";
import EncounterConditionProse from "./encounterConditionProse.model";
import EncounterConditionValueProse from "./encounterConditionValueProse.model";
import EncounterMethodProse from "./encounterMethodProse.model";
import EvolutionTriggerProse from "./evolutionTriggerProse.model";
import GenerationName from "./generationName.model";
import GrowthRateProse from "./growthRateProse.model";
import ItemCategoryProse from "./itemCategoryProse.model";
import ItemFlavorText from "./itemFlavorText.model";
import ItemFlingEffectProse from "./itemFlingEffectProse.model";
import ItemName from "./itemName.model";
import PocketName from "./pocketName.model";
import ItemProse from "./itemProse.model";

export default class Language extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  abilityFlavorText() {
    return this.has(AbilityFlavorText, 'language_id', 'id');
  }

  abilityName() {
    return this.has(AbilityName, 'local_language_id', 'id');
  }

  abilityProse() {
    return this.has(AbilityProse, 'local_language_id', 'id');
  }

  berryFirmnessName() {
    return this.has(BerryFirmnessName, 'local_language_id', 'id');
  }

  characteristicText() {
    return this.has(CharacteristicText, 'local_language_id', 'id');
  }

  contestEffectProse() {
    return this.has(ContestEffectProse, 'local_language_id', 'id');
  }

  contestTypeName() {
    return this.has(ContestTypeName, 'local_language_id', 'id');
  }

  eggGroupProse() {
    return this.has(EggGroupProse, 'local_language_id', 'id');
  }

  encounterConditionProse() {
    return this.has(EncounterConditionProse, 'local_language_id', 'id');
  }

  encounterConditionValueProse() {
    return this.has(EncounterConditionValueProse, 'local_language_id', 'id');
  }

  encounterMethodProse() {
    return this.has(EncounterMethodProse, 'local_language_id', 'id');
  }

  evolutionTriggerProse() {
    return this.has(EvolutionTriggerProse, 'local_language_id', 'id');
  }

  generationName() {
    return this.has(generationName, 'local_language_id', 'id');
  }

  growthRateProse() {
    return this.has(GrowthRateProse, 'local_language_id', 'id');
  }

  itemCategoryProse() {
    return this.has(ItemCategoryProse, 'local_language_id', 'id');
  }

  itemFlavorText() {
    return this.has(ItemFlavorText, 'language_id', 'id');
  }

  itemFlingEffectProse() {
    return this.has(ItemFlingEffectProse, 'local_language_id', 'id');
  }

  itemName() {
    return this.has(ItemName, 'local_language_id', 'id');
  }

  pocketName() {
    return this.has(PocketName, 'local_language_id', 'id');
  }

  itemProse() {
    return this.has(ItemProse, 'local_language_id', 'id');
  }

}

Language.prototype.table = 'languages';
