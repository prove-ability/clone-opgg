import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import RecordListInfo from './RecordMatchListInfo';
// import styled from 'styled-components';

/**
 * record 리스트
 */

const style = {
  outline: 'none',
};

const RecordMatchList = ({ matchlists, summoner }) => {
  if (matchlists === null) return null;
  const matches = matchlists.matches;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const matchInfo = matches[index];
      return (
        <RecordListInfo
          match={matchInfo}
          key={key}
          style={style}
          summonerName={summoner.name}
        />
      );
    },
    [matches, summoner.name],
  );
  return (
    <List
      width={690}
      height={450}
      rowCount={matches.length}
      rowHeight={80}
      rowRenderer={rowRenderer}
      list={matches}
      style={style}
    />
  );
};

export default React.memo(RecordMatchList);
