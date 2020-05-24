import React from 'react';
import styled from 'styled-components';
import { spellUrl, runeUrl } from '../../lib/img/image';

/**
 * 스펠 룬 컴포넌트
 */

const RecordMatchListInfoSpellRuneBlock = styled.div`
  display: flex;
  flex-direction: row;
  div {
    display: flex;
    flex-direction: column;
    img {
      width: 22px;
      height: 22px;
    }
  }
`;

const RecordMatchListInfoSpellRune = ({
  spell1,
  spell2,
  rune1Num,
  rune2Num,
}) => {
  return (
    <RecordMatchListInfoSpellRuneBlock>
      <div>
        <img src={spellUrl(spell1)} alt="spell1Image" />
        <img src={spellUrl(spell2)} alt="spell2Image" />
      </div>
      <div>
        <img src={runeUrl(rune1Num, false)} alt="rune1Image" />
        <img src={runeUrl(rune2Num, true)} alt="rune2Image" />
      </div>
    </RecordMatchListInfoSpellRuneBlock>
  );
};

export default RecordMatchListInfoSpellRune;
