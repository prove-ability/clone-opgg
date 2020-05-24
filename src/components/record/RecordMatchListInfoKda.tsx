import React from 'react';
import styled from 'styled-components';

/**
 * 챔프 랩, cs, 킬관여
 */

const RecordMatchListInfoKdaBlock = styled.div`
  color: #555e5e;
  .killEffect {
    color: #c6443e;
  }
`;
const RecordMatchListInfoKda = ({ kda, grade }) => {
  return (
    <RecordMatchListInfoKdaBlock>
      <div>평점 {grade}</div>
      <div>{kda}</div>
    </RecordMatchListInfoKdaBlock>
  );
};

export default RecordMatchListInfoKda;
