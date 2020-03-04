import React from 'react';
import styled from 'styled-components';
import {
  itemUrl,
  redIconUrl,
  blueIconUrl,
  fowIconUrl,
} from '../../lib/img/image';

/**
 * 아이템 이미지 컴포넌트
 */

const RecordMatchListInfoItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  div {
    width: 22px;
    height: 22px;
    background-image: url('http://z.fow.kr/items3/0.png');
    background-repeat: repeat;
    border-radius: 3px;
    img {
      width: 100%;
    }
  }
  .top {
    display: flex;
    flex-direction: row;
  }
  .bottom {
    display: flex;
    flex-direction: row;
  }
`;

const RecordMatchListInfoItem = ({ item, win, visionWardsBoughtInGame }) => {
  return (
    <RecordMatchListInfoItemBlock>
      <section className="top">
        <div>
          <img
            key={0}
            src={item[0] !== 0 ? itemUrl(item[0]) : fowIconUrl}
            alt={'item' + 0 + 'Image'}
          />
        </div>
        <div>
          {item[1] !== 0 ? (
            <img key={1} src={itemUrl(item[1])} alt={'item' + 1 + 'Image'} />
          ) : null}
        </div>
        <div>
          {item[2] !== 0 ? (
            <img key={2} src={itemUrl(item[2])} alt={'item' + 2 + 'Image'} />
          ) : null}
        </div>
        <div>
          {item[6] !== 0 ? (
            <img src={itemUrl(item[6])} alt={'item' + 6 + 'Image'} />
          ) : null}
        </div>
      </section>
      <section className="bottom">
        <div>
          {item[3] !== 0 ? (
            <img key={3} src={itemUrl(item[3])} alt={'item' + 3 + 'Image'} />
          ) : null}
        </div>
        <div>
          {item[4] !== 0 ? (
            <img key={4} src={itemUrl(item[4])} alt={'item' + 4 + 'Image'} />
          ) : null}
        </div>
        <div>
          {item[5] !== 0 ? (
            <img src={itemUrl(item[5])} alt={'item' + 5 + 'Image'} />
          ) : null}
        </div>
        <div>
          <img src={win === true ? blueIconUrl : redIconUrl} alt={'Icon'} />
        </div>
      </section>
    </RecordMatchListInfoItemBlock>
  );
};

export default RecordMatchListInfoItem;
