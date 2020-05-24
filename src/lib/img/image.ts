const prefixUrlOpgg = 'https://opgg-static.akamaized.net/images/';
const prefixUrlSpell = 'http://ddragon.leagueoflegends.com/cdn/10.3.1/img/';

const image = {
  IRON: {
    I: `${prefixUrlOpgg}medals/iron_1.png`,
    II: `${prefixUrlOpgg}medals/iron_2.png`,
    III: `${prefixUrlOpgg}medals/iron_3.png`,
    IV: `${prefixUrlOpgg}medals/iron_4.png`,
  },
  BRONZE: {
    I: `${prefixUrlOpgg}medals/bronze_1.png`,
    II: `${prefixUrlOpgg}medals/bronze_2.png`,
    III: `${prefixUrlOpgg}medals/bronze_3.png`,
    IV: `${prefixUrlOpgg}medals/bronze_4.png`,
  },
  SILVER: {
    I: `${prefixUrlOpgg}medals/silver_1.png`,
    II: `${prefixUrlOpgg}medals/silver_2.png`,
    III: `${prefixUrlOpgg}medals/silver_3.png`,
    IV: `${prefixUrlOpgg}medals/silver_4.png`,
  },
  GOLD: {
    I: `${prefixUrlOpgg}medals/gold_1.png`,
    II: `${prefixUrlOpgg}medals/gold_2.png`,
    III: `${prefixUrlOpgg}medals/gold_3.png`,
    IV: `${prefixUrlOpgg}medals/gold_4.png`,
  },
  PLATINUM: {
    I: `${prefixUrlOpgg}medals/platinum_1.png`,
    II: `${prefixUrlOpgg}medals/platinum_2.png`,
    III: `${prefixUrlOpgg}medals/platinum_3.png`,
    IV: `${prefixUrlOpgg}medals/platinum_4.png`,
  },
  DIAMOND: {
    I: `${prefixUrlOpgg}medals/diamond_1.png`,
    II: `${prefixUrlOpgg}medals/diamond_2.png`,
    III: `${prefixUrlOpgg}medals/diamond_3.png`,
    IV: `${prefixUrlOpgg}medals/diamond_4.png`,
  },
  MASTER: {
    I: `${prefixUrlOpgg}medals/master_1.png`,
  },
  GRANDMASTER: {
    I: `${prefixUrlOpgg}medals/grandmaster_1.png`,
  },
  CHALLENGER: {
    I: `${prefixUrlOpgg}medals/challenger_1.png`,
  },
};

export const championSquareUrl = (param: any) =>
  `${prefixUrlSpell}champion/${param}`;
export const spellUrl = (spellName: any) =>
  `${prefixUrlSpell}spell/${spellName}.png`;
export const runeUrl = (runeNum: any, type: boolean) =>
  `${prefixUrlOpgg}lol/${type === true ? 'perkStyle' : 'perk'}/${runeNum}.png`;
export const itemUrl = (item: any) => `${prefixUrlOpgg}lol/item/${item}.png`;
// https://opgg-static.akamaized.net/css3/sprite/images/icon-buildred-p.png
// export const redIconUrl = `${prefixUrlOpgg}icon-buildred-p.png`;
export const redIconUrl = `https://opgg-static.akamaized.net/css3/sprite/images/icon-buildred-p.png`;
export const blueIconUrl = `https://opgg-static.akamaized.net/css3/sprite/images/icon-buildblue-p.png`;
export const redWardUrl = `${prefixUrlOpgg}site/summoner/icon-ward-red.png`;
export const blueWardUrl = `${prefixUrlOpgg}site/summoner/icon-ward-blue.png`;
export const fowIconUrl = 'http://z.fow.kr/items3/0.png';

export default image;
