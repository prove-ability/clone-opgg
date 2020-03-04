import React from 'react';
import styled from 'styled-components';
import { championSquareUrl } from '../../lib/img/image';

/**
 * 전체 플레이어 챔프 이미지
 */

const RecordMatchListInfoUsersBlock = styled.div`
  /* font-size: 0.5rem; */
  display: flex;
  flex-direction: column;
  width: 110px;
  .imageTool {
    width: 22px;
    /* height: 22px; */
    display: flex;
    .playerChampionImage {
      width: 100%;
    }
  }
`;

const RecordMatchListInfoUsers = ({ getUserList }) => {
  const [team100, team200] = getUserList();
  return (
    <RecordMatchListInfoUsersBlock>
      <div className="imageTool">
        {team100.map((info, key) => (
          <img
            className="playerChampionImage"
            src={championSquareUrl(info.championImage)}
            alt="championImage"
          />
        ))}
      </div>
      <div className="imageTool">
        {team200.map((info, key) => (
          <img
            className="playerChampionImage"
            src={championSquareUrl(info.championImage)}
            alt="championImage"
          />
        ))}
      </div>
    </RecordMatchListInfoUsersBlock>
  );
};

export default RecordMatchListInfoUsers;
