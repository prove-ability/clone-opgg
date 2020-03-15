import React from 'react';
import styled from 'styled-components';

/**
 * champ level, gold, cs
 */

const RecordMatchListInfoLvGCsBlock = styled.div`
  text-align: center;
  .gold {
    font-weight: bold;
  }
`;

const RecordMatchListInfoLvGCs = ({ champLevel, goldEarned, cs }) => {
  return (
    <RecordMatchListInfoLvGCsBlock>
      <div>레벨 {champLevel}</div>
      <div className="gold">골드 {goldEarned}</div>
      <div>CS {cs}</div>
    </RecordMatchListInfoLvGCsBlock>
  );
};

export default RecordMatchListInfoLvGCs;
