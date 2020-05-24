import championJson from '../json/champion.json';
import spellJson from '../json/spell.json';

const championObj = JSON.parse(JSON.stringify(championJson.data));
const spellObj = JSON.parse(JSON.stringify(spellJson.data));

export function champion(id: any) {
  let array = [];
  let result = null;
  for (const key in championObj) {
    array.push(championObj[key]);
  }
  result = array.filter((info) => info.key === String(id));
  return result[0];
}

export function spell(id: any) {
  let array = [];
  let result = null;
  for (const key in spellObj) {
    array.push(spellObj[key]);
  }
  result = array.filter((info) => info.key === String(id));
  return result[0];
}

// export default champion;
