import getLimit from '../getLimit';
import calcAbility from './calcAbility';
import calcMight from './calcMight';
import calcVal from '../calcVal';

const calcMCBonus = adventurer => {
  const { mana = '50', McBonus } = adventurer;

  if (mana === '0') return [0, 0];

  const index = ['10', '20', '30', '40', '45', '50', '70'].indexOf(mana);
  return McBonus[index];
};

const calcNormalStat = (itemKey, item) => {
  const rarity = itemKey === 'adventurer' ? '5' : item.Rarity;
  const level = Number(item.level);
  const MAX_LEVEL = getLimit(itemKey, rarity);

  if (level === MAX_LEVEL) {
    return item.Max;
  }

  let minHp;
  let minStr;
  let stepHp;
  let stepStr;

  if (itemKey === 'adventurer') {
    const { curRarity = '5' } = item;
    // adventurer.Min: [[45, 26], [55, 32], [64, 37]]
    const r = Number(curRarity);
    [minHp, minStr] = item.Min[r - 3];
    [, , [stepHp, stepStr]] = item.Min;
  } else {
    // item.Min: [36, 12]
    [minHp, minStr] = item.Min;
    stepHp = minHp;
    stepStr = minStr;
  }

  const [maxHp, maxStr] = item.Max;

  const diff = (level - 1) / (MAX_LEVEL - 1);

  const hp = calcVal(minHp + diff * (maxHp - stepHp));
  const str = calcVal(minStr + diff * (maxStr - stepStr));

  return [hp, str];
};

const calcAdventurer = item => {
  const level = Number(item.level);
  const { Max, AddMax1 } = item;
  if (level === 100) return AddMax1;

  if (level > 80) {
    const [baseHp, baseStr] = Max;
    const [maxHp, maxStr] = AddMax1;

    const diff = (level - 80) / 20;
    const hp = calcVal(baseHp + diff * (maxHp - baseHp));
    const str = calcVal(baseStr + diff * (maxStr - baseStr));

    return [hp, str];
  }

  return calcNormalStat('adventurer', item);
};

const calcItem = (itemKey, item, sameEle = false) => {
  if (item == null) return null;

  let hp;
  let str;

  if (itemKey === 'adventurer') {
    [hp, str] = calcAdventurer(item);

    const [mcHp, mcStr] = calcMCBonus(item);
    hp += mcHp;
    str += mcStr;
  } else {
    [hp, str] = calcNormalStat(itemKey, item);
  }

  let { augHp = 0, augStr = 0 } = item;
  augHp = Number(augHp);
  augStr = Number(augStr);

  if (sameEle) {
    // weapon, dragon has x1.5 bonus when matches adventurer element
    // (hp + augHp) * 1.5 - augHp = hp * 1.5 + augHp * 0.5;
    hp = calcVal(hp * 1.5 + augHp * 0.5);
    str = calcVal(str * 1.5 + augStr * 0.5);
  }

  const might = calcMight(itemKey, item);
  const ability = calcAbility(itemKey, item, sameEle);

  return {
    hp,
    str,
    might,
    augHp,
    augStr,
    ...ability,
  };
};

export default calcItem;
