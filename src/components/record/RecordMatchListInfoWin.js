import React from 'react';
import styled, { css } from 'styled-components';

/**
 * match info Win component
 */

const RecordMatchListInfoWinBlock = styled.div`
  display: flex;
  flex-direction: column;
  .role {
    font-weight: bold;
  }
  .matchTime {
    font-size: inherit;
  }
  .win {
    color: #c6443e;
    font-weight: bold;
    ${props =>
      props.win &&
      css`
        color: #1a78ae;
      `}
  }
`;

const RecordMatchListInfoWin = ({ win }) => {
  return (
    <RecordMatchListInfoWinBlock win={win}>
      {/* <div className="role">{transRole(role)}</div>
      <div className="matchTime">{matchTime}일 전</div> */}
      <div className="win">{win === true ? '승' : '패'}</div>
    </RecordMatchListInfoWinBlock>
  );
};

export default RecordMatchListInfoWin;
