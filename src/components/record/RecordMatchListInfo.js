import React from 'react';
import styled from 'styled-components';

/**
 * 전적 정보
 */

const RecordMatchListInfoBlock = styled.div`
  & + & {
    border-top: 1px solid #dee2e6;
  }
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

const RecordMatchListInfo = ({ match, style }) => {
  return (
    <RecordMatchListInfoBlock style={style}>
      {match.champion}
    </RecordMatchListInfoBlock>
  );
};

export default React.memo(RecordMatchListInfo);
