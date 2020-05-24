import React from 'react';
import styled from 'styled-components';
import image from '../../lib/img/image';
import palette from '../../lib/styles/palette';

/**
 * 소환사 정보
 */

const RecordSummonerInfoBlock = styled.div`
  display: flex;
`;

const TierImage = styled.img`
  width: 200px;
  height: 200px;
`;

const InfoDiv = styled.div`
  h2 {
    color: ${palette.indigo[7]};
  }
`;

const RecordSummonerInfo = ({ league }) => {
  if (league === null) return null;
  const jsonImg = JSON.parse(JSON.stringify(image));
  const { tier, rank, leaguePoints, wins, losses, queueType } = league;
  return (
    <RecordSummonerInfoBlock>
      {league && (
        <>
          <TierImage src={jsonImg[`${tier}`][`${rank}`]} alt="tierImage" />
          <InfoDiv>
            <h4>{`${queueType}`}</h4>
            <h2>{`${tier} ${rank}`}</h2>
            <h3>{`${leaguePoints} LP / ${wins} 승 ${losses} 패`}</h3>
            <h3>{`승률 ${Math.round((wins / (wins + losses)) * 100)}%`}</h3>
          </InfoDiv>
        </>
      )}
    </RecordSummonerInfoBlock>
  );
};

export default React.memo(RecordSummonerInfo);
