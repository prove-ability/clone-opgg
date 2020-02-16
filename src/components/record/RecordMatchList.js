import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import RecordListInfo from './RecordMatchListInfo';
// import styled from 'styled-components';

/**
 * record 리스트
 */

// const RecordMatchListBlock = styled.div``;

const RecordMatchList = ({ match }) => {
  if (match === null) return null;
  const matches = match.matches;
  // const matchList = matches.map((info, key) => (
  //   <RecordListInfo key={key} info={info} />
  // ));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const matchInfo = matches[index];
      return <RecordListInfo match={matchInfo} key={key} style={style} />;
    },
    [matches],
  );
  // return <RecordMatchListBlock>test</RecordMatchListBlock>;
  // return <RecordMatchListBlock>{matchList}</RecordMatchListBlock>;
  // return <RecordMatchListBlock>{rowRenderer}</RecordMatchListBlock>;
  return (
    <List
      width={512}
      height={513}
      rowCount={matches.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={matches}
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(RecordMatchList);
