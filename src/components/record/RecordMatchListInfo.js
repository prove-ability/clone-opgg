import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getMatch } from '../../lib/api/record';
import { getMatchInfo } from '../../lib/util/record';
import RecordMatchListInfoItem from './RecordMatchListInfoItem';
import RecordMatchListInfoUsers from './RecordMatchListInfoUsers';
import RecordMatchListInfoWin from './RecordMatchListInfoWin';
import RecordMatchListInfoChampion from './RecordMatchListInfoChampion';
import RecordMatchListInfoType from './RecordMatchListInfoType';
import RecordMatchListInfoKda from './RecordMatchListInfoKda';
import RecordMatchListInfoKillEffect from './RecordMatchListInfoKillEffect';
import RecordMatchListInfoSpellRune from './RecordMatchListInfoSpellRune';
import RecordMatchListInfoLvGCs from './RecordMatchListInfoLvGCs';
import RecordMatchListInfoPlay from './RecordMatchListInfoPlay';
import RecordMatchListInfoWard from './RecordMatchListInfoWard';

/**
 * 전적 정보
 */
const RecordMatchListInfoBlock = styled.div`
  & + & {
    border-top: 1px solid #dee2e6;
  }
  &:nth-child(even) {
    background: #f8f9fa;
  }
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const RecordMatchListInfo = ({ match, style, summonerName }) => {
  const [matchDetail, setMatchDetail] = useState(null);
  const id = useRef(match.gameId);
  useEffect(() => {
    const res = async () => await getMatch(id.current);
    res().then(res => setMatchDetail(res.data));
  }, [match]);
  if (matchDetail === null) return null;
  const [
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
  ] = getMatchInfo(match, matchDetail, summonerName);
  style.background = backgroundColor;
  return (
    <RecordMatchListInfoBlock style={style}>
      <RecordMatchListInfoWin win={win} />
      <RecordMatchListInfoChampion
        championImage={championImage}
        championName={championName}
      />
      <RecordMatchListInfoType role={match.role} />
      <RecordMatchListInfoKda kda={kda} grade={grade} />
      <RecordMatchListInfoKillEffect killEffect={killEffect} />
      <RecordMatchListInfoSpellRune
        spell1={spell1}
        spell2={spell2}
        rune1Num={rune1Num}
        rune2Num={rune2Num}
      />
      <RecordMatchListInfoUsers getUserList={getUserList} />
      <RecordMatchListInfoItem item={item} />
      <RecordMatchListInfoLvGCs
        champLevel={champLevel}
        goldEarned={goldEarned}
        cs={cs}
      />
      <RecordMatchListInfoPlay matchTime={matchTime} />
      <RecordMatchListInfoWard ward={ward} />
    </RecordMatchListInfoBlock>
  );
};

export default React.memo(RecordMatchListInfo);
