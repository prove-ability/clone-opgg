import { champion, spell } from './jsonToData';
import { championSquareUrl } from '../img/image';
import moment from '../../../node_modules/moment/moment';

export function getMatchInfo(match, matchDetail, summonerName) {
  const championInfo = champion(match.champion);
  const championImage = championSquareUrl(championInfo.image.full);
  const championName = championInfo.name;
  const matchTime = moment(match.timestamp).fromNow();
  const selectParticipantId = () => {
    const res = matchDetail.participantIdentities.filter(
      info => info.player.summonerName === summonerName,
    );
    return res[0].participantId - 1;
  };
  // matchInfo
  const matchSummonerInfo = matchDetail.participants[selectParticipantId()];
  const backgroundColor =
    matchSummonerInfo.stats.win === true ? '#74c0fc' : '#ffa8a8';
  const getTotalKill = () => {
    let result = 0;
    matchDetail.participants.map(info =>
      matchSummonerInfo.teamId === info.teamId
        ? (result += info.stats.kills)
        : null,
    );
    return result;
  };
  const goldEarned = matchSummonerInfo.stats.goldEarned;
  // info
  const {
    spell1Id,
    spell2Id,
    stats: {
      win,
      visionWardsBoughtInGame,
      wardsPlaced,
      wardsKilled,
      kills,
      deaths,
      assists,
      totalMinionsKilled,
      neutralMinionsKilled,
      champLevel,
      perk0,
      perkSubStyle,
      item0,
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
    },
  } = matchSummonerInfo;
  const ward = [visionWardsBoughtInGame, wardsPlaced, wardsKilled];
  const grade = ((kills + assists) / deaths).toFixed(2) + ':1'; // 평정
  const killEffect =
    (((kills + assists) / getTotalKill()) * 100).toFixed() + '%'; // 킬관여
  const spell1 = spell(spell1Id).id;
  const spell2 = spell(spell2Id).id;
  const rune1Num = perk0;
  const rune2Num = perkSubStyle;
  const item = [item0, item1, item2, item3, item4, item5, item6];
  const kda = `${kills} / ${deaths} / ${assists}`;
  const cs = totalMinionsKilled + neutralMinionsKilled;
  const getUserList = () => {
    // participantIdentities
    let team100 = [];
    let team200 = [];
    matchDetail.participants.map((info, key) => {
      let participantIdentities = matchDetail.participantIdentities[key];
      let userObj = {
        summonerName: participantIdentities.player.summonerName,
        participantId: participantIdentities.participantId,
        role: info.timeline.role,
        lane: info.timeline.lane,
        teamId: info.teamId,
        championImage: champion(info.championId).image.full,
      };
      if (100 === info.teamId) team100.push(userObj);
      if (200 === info.teamId) team200.push(userObj);
      return null;
    });
    return [team100, team200];
  };
  return [
    championImage,
    matchTime,
    backgroundColor,
    champLevel,
    ward,
    cs,
    kda,
    grade,
    killEffect,
    win,
    spell1,
    spell2,
    rune1Num,
    rune2Num,
    item,
    getUserList,
    championName,
    goldEarned,
  ];
}

export function transRole(param) {
  let result = '';
  switch (param) {
    case 'DUO_CARRY':
    case 'DUO_SUPPORT':
    case 'NONE':
    case 'SOLO':
      result = '랭크';
      break;
    default:
      result = param;
      break;
  }
  return result;
}
