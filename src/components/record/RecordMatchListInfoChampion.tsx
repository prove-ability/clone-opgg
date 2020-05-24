import React from 'react';
import styled from 'styled-components';

/**
 * 참피언 이미지 및 이름
 */

const RecordMatchListInfoChampionBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  .image {
    /* display: flex;
    flex-direction: column; */
    img {
      width: 2rem;
      /* flex: 2; */
    }
  }
  .championName {
    text-align: center;
  }
`;

const RecordMatchListInfoChampion = ({ championImage, championName }) => {
  return (
    <RecordMatchListInfoChampionBlock>
      <div className="image">
        <img src={championImage} alt="championImage" />
        <div className="championName">{championName}</div>
      </div>
    </RecordMatchListInfoChampionBlock>
  );
};

export default RecordMatchListInfoChampion;
