import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RecordMatchList from '../../components/record/RecordMatchList';
import { getMatch } from '../../modules/record';

const RecordMatchInfoC = () => {
  const dispatch = useDispatch();
  const { match, matchError, summoner, summonerError } = useSelector(
    ({ record }) => ({
      match: record.match,
      matchError: record.matchError,
      summoner: record.summoner,
      summonerError: record.summonerError,
    }),
  );
  useEffect(() => {
    if (summonerError) {
      console.log('record 오류 발생 - RecordMatchInfoC');
      console.log(summonerError);
      return;
    }
    if (summoner) {
      console.log('record 발생');
      const accountId = summoner.accountId;
      dispatch(getMatch({ accountId }));
    }
  }, [dispatch, summoner, summonerError]);
  if (matchError) return alert(matchError);
  return <RecordMatchList match={match} />;
};

export default RecordMatchInfoC;
