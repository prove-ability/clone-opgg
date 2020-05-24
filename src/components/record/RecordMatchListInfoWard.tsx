import React from 'react';
import styled from 'styled-components';

/**
 * 와드 컴포넌트
 */

const RecordMatchListInfoWardBlock = styled.div`
  text-align: center;
  img {
    width: 16px;
  }
`;

const RecordMatchListInfoWard = ({ ward }) => {
  const [visionWardsBoughtInGame, wardsPlaced, wardsKilled] = ward;
  return (
    <RecordMatchListInfoWardBlock>
      <div>
        <img src="http://z.fow.kr//items3/2055.png" alt="pinkward" />
        {visionWardsBoughtInGame}
      </div>
      <div>
        {wardsPlaced} / {wardsKilled}
      </div>
    </RecordMatchListInfoWardBlock>
  );
};

export default RecordMatchListInfoWard;
