import React from 'react';
import styled from 'styled-components';

/**
 * 와드 컴포넌트
 */

const RecordMatchListInfoWardBlock = styled.div``;

const RecordMatchListInfoWard = ({ ward }) => {
  const [visionWardsBoughtInGame, wardsPlaced, wardsKilled] = ward;
  return (
    <RecordMatchListInfoWardBlock>
      <div>{visionWardsBoughtInGame}</div>
      <div>{wardsPlaced}</div>
      <div>{wardsKilled}</div>
    </RecordMatchListInfoWardBlock>
  );
};

export default RecordMatchListInfoWard;
