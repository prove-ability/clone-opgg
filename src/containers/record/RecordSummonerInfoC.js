import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RecordSummonerInfo from '../../components/record/RecordSummonerInfo';
import { getLeague } from '../../modules/record';

const RecordSummonerInfoC = () => {
  const dispatch = useDispatch();
  const { league, leagueError, summoner, summonerError } = useSelector(
    ({ record }) => ({
      league: record.league,
      leagueError: record.leagueError,
      summoner: record.summoner,
      summonerError: record.summonerError,
    }),
  );

  // record 성공/실패 처리
  useEffect(() => {
    if (summonerError) {
      console.log('record 오류 발생 - RecordSummonerInfoC');
      console.log(summonerError);
      return;
    }
    if (summoner) {
      console.log('record 발생');
      const summonerId = summoner.id;
      dispatch(getLeague({ summonerId }));
    }
  }, [dispatch, summoner, summonerError]);
  if (leagueError) return alert(leagueError);
  return <RecordSummonerInfo league={league} />;
};

export default RecordSummonerInfoC;
