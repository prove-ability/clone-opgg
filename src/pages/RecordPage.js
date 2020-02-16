import React from 'react';
import RecordTemplate from '../components/record/RecordTemplate';
import RecordFormC from '../containers/record/RecordSearchFormC';
import RecordSummonerInfoC from '../containers/record/RecordSummonerInfoC';
import RecordMatchInfoC from '../containers/record/RecordMatchInfoC';

const RecordPage = () => {
  return (
    <>
      <RecordTemplate>
        <RecordFormC />
        <RecordSummonerInfoC />
        <RecordMatchInfoC />
      </RecordTemplate>
    </>
  );
};

export default RecordPage;
