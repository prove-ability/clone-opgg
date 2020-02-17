import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RecordMatchList from '../../components/record/RecordMatchList';
import { getMatchlists } from '../../modules/record';

const RecordMatchListC = () => {
  const dispatch = useDispatch();
  const { matchlists, matchlistsError, summoner, summonerError } = useSelector(
    ({ record }) => ({
      matchlists: record.matchlists,
      matchlistsError: record.matchlistsError,
      summoner: record.summoner,
      summonerError: record.summonerError,
    }),
  );
  useEffect(() => {
    if (summonerError) {
      console.log('record 오류 발생 - RecordMatchListC');
      console.log(summonerError);
      return;
    }
    if (summoner) {
      console.log('record 발생');
      const accountId = summoner.accountId;
      dispatch(getMatchlists({ accountId }));
    }
  }, [dispatch, summoner, summonerError]);
  if (matchlistsError) return alert(matchlistsError);
  return <RecordMatchList matchlists={matchlists} summoner={summoner} />;
};

export default RecordMatchListC;
