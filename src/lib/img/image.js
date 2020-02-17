const prefixUrlChampion = 'https://opgg-static.akamaized.net/images/medals/';
const prefixUrlSpell = 'http://ddragon.leagueoflegends.com/cdn/10.3.1/img/';

const image = {
  IRON: {
    I: `${prefixUrlChampion}iron_1.png`,
    II: `${prefixUrlChampion}iron_2.png`,
    III: `${prefixUrlChampion}iron_3.png`,
    IV: `${prefixUrlChampion}iron_4.png`,
  },
  BRONZE: {
    I: `${prefixUrlChampion}bronze_1.png`,
    II: `${prefixUrlChampion}bronze_2.png`,
    III: `${prefixUrlChampion}bronze_3.png`,
    IV: `${prefixUrlChampion}bronze_4.png`,
  },
  SILVER: {
    I: `${prefixUrlChampion}silver_1.png`,
    II: `${prefixUrlChampion}silver_2.png`,
    III: `${prefixUrlChampion}silver_3.png`,
    IV: `${prefixUrlChampion}silver_4.png`,
  },
  GOLD: {
    I: `${prefixUrlChampion}gold_1.png`,
    II: `${prefixUrlChampion}gold_2.png`,
    III: `${prefixUrlChampion}gold_3.png`,
    IV: `${prefixUrlChampion}gold_4.png`,
  },
  PLATINUM: {
    I: `${prefixUrlChampion}platinum_1.png`,
    II: `${prefixUrlChampion}platinum_2.png`,
    III: `${prefixUrlChampion}platinum_3.png`,
    IV: `${prefixUrlChampion}platinum_4.png`,
  },
  DIAMOND: {
    I: `${prefixUrlChampion}diamond_1.png`,
    II: `${prefixUrlChampion}diamond_2.png`,
    III: `${prefixUrlChampion}diamond_3.png`,
    IV: `${prefixUrlChampion}diamond_4.png`,
  },
  MASTER: {
    I: `${prefixUrlChampion}master_1.png`,
  },
  GRANDMASTER: {
    I: `${prefixUrlChampion}grandmaster_1.png`,
  },
  CHALLENGER: {
    I: `${prefixUrlChampion}challenger_1.png`,
  },
};

// export function championSquareUrl(param) {
//   return `${prefixUrlSpell}champion/${param}`;
// }
export const championSquareUrl = param => `${prefixUrlSpell}champion/${param}`;
export const spellUrl = spellName => `${prefixUrlSpell}spell/${spellName}.png`;

export default image;
