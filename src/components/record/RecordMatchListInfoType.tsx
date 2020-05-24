import React from 'react';
import styled from 'styled-components';
import { transRole } from '../../lib/util/record';

/**
 * 랭크 종류 컴포넌트
 */

const RecordMatchListScoreBlock = styled.div``;

const RecordMatchListScore = ({ role }) => {
  return (
    <RecordMatchListScoreBlock>
      <div className="role">{transRole(role)}</div>
    </RecordMatchListScoreBlock>
  );
};

export default RecordMatchListScore;
