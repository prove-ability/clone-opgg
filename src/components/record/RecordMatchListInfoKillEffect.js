import React from 'react';
import styled from 'styled-components';

/**
 * 킬 관여 컴포넌트
 */

const RecordMatchListInfoKillEffectBlock = styled.div``;

const RecordMatchListInfoKillEffect = ({ killEffect }) => {
  return (
    <RecordMatchListInfoKillEffectBlock>
      {killEffect}
    </RecordMatchListInfoKillEffectBlock>
  );
};

export default RecordMatchListInfoKillEffect;
