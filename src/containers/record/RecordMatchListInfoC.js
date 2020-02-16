import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RecordMatchListInfo from '../../components/record/RecordMatchListInfo';

const RecordMatchListInfoC = () => {
  const dispatch = useDispatch();
  const { match, matchError } = useSelector(({ record }) => ({
    match: record.match,
    matchError: record.matchError,
  }));

  useEffect(() => {
    if (matchError) {
      console.log('matchError - RecordMatchListInfoC');
      console.log(matchError);
    }
    if (match) {
      console.log('match - RecordMatchListInfoC');
      console.log(match);
      
    }
  }, [dispatch, match, matchError]);
  return <RecordMatchListInfo />;
};

export default RecordMatchListInfoC;
