import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import RecordMatchListInfo from './RecordMatchListInfo';

/**
 * 리스트
 */

interface RecordMatchListProps {
  matchlists: any;
  summoner: any;
}

const style = {
  outline: 'none',
};

const RecordMatchList = ({ matchlists, summoner }: RecordMatchListProps) => {
  if (matchlists === null) return null;
  const matches = matchlists.matches;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const matchInfo = matches[index];
      return (
        <RecordMatchListInfo
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

export default RecordMatchList;
