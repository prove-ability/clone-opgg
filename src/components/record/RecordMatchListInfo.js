import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { champion, spell } from '../../lib/data/jsonToData';
import { championSquareUrl, spellUrl } from '../../lib/img/image';
import { getMatch } from '../../lib/api/record';
/**
 * 전적 정보
 */
// matchSummonerInfo.stats.win === true ? '승리' : '패배'
const RecordMatchListInfoBlock = styled.div`
  & + & {
    border-top: 1px solid #dee2e6;
  }
  &:nth-child(even) {
    background: #f8f9fa;
  }
  img {
    width: 2rem;
  }
  .title {
    font-family: fantasy;
    font-size: 1.2rem;
    text-align: center;
  }
  .description {
    display: flex;
  }
`;
const transRole = param => {
  let result = '';
  switch (param) {
    case 'DUO_CARRY':
    case 'DUO_SUPPORT':
    case 'NONE':
    case 'SOLO':
      result = '솔랭';
      break;
    default:
      result = param;
      break;
  }
  return result;
};
const RecordMatchListInfo = ({ match, style, summonerName }) => {
  const [matchDetail, setMatchDetail] = useState(null);
  const id = useRef(match.gameId);
  useEffect(() => {
    const res = async () => await getMatch(id.current);
    res().then(res => setMatchDetail(res.data));
  }, [match]);
  if (matchDetail === null) return null;
  const championInfo = champion(match.champion);
  const championImage = championSquareUrl(championInfo.image.full);
  const matchTime = moment(match.timestamp).format('YYYY-MM-DD hh:mm:ss a');
  const selectParticipantId = () => {
    const res = matchDetail.participantIdentities.filter(
      info => info.player.summonerName === summonerName,
    );
    return res[0].participantId - 1;
  };
  const matchSummonerInfo = matchDetail.participants[selectParticipantId()];
  const getSpellImage = () => {
    const spell1Id = spell(matchSummonerInfo.spell1Id);
    const spell2Id = spell(matchSummonerInfo.spell2Id);
    return (
      <>
        <img src={spellUrl(spell1Id.id)} alt="spell1Image" />
        <img src={spellUrl(spell2Id.id)} alt="spell2Image" />
      </>
    );
  };
  style.background =
    matchSummonerInfo.stats.win === true ? '#4dabf7' : '#ff8787';
  return (
    <RecordMatchListInfoBlock style={style}>
      <div className="title">{matchTime}</div>
      <div className="description">
        <img src={championImage} alt="championImage" />
        {getSpellImage()}
        <div>{transRole(match.role)}</div>
        <div>{matchSummonerInfo.stats.win === true ? '승리' : '패배'}</div>
        <div>
          {matchDetail.participantIdentities.map((info, key) => (
            <div key={key}>{info.player.summonerName}</div>
          ))}
        </div>
      </div>
    </RecordMatchListInfoBlock>
  );
};

export default React.memo(RecordMatchListInfo);
