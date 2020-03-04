import React from 'react';
import styled from 'styled-components';

/**
 * champ level, gold, cs
 */

const RecordMatchListInfoLvGCsBlock = styled.div``;

const RecordMatchListInfoLvGCs = ({ champLevel, goldEarned, cs }) => {
  return (
    <RecordMatchListInfoLvGCsBlock>
      <div>{champLevel}</div>
      <div>{goldEarned}</div>
      <div>{cs}</div>
    </RecordMatchListInfoLvGCsBlock>
  );
};

export default RecordMatchListInfoLvGCs;
