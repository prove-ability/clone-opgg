import React from 'react';
import styled from 'styled-components';

/**
 *
 */

const RecordMatchListInfoPlayBlock = styled.div``;

const RecordMatchListInfoPlay = ({ matchTime }) => {
  return (
    <RecordMatchListInfoPlayBlock>{matchTime}</RecordMatchListInfoPlayBlock>
  );
};

export default RecordMatchListInfoPlay;
