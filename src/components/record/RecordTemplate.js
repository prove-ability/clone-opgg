import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import { champion } from '../../lib/data/jsonToData';

/**
 * 전전 페이지 라이아웃
 */

/* 화면 전체를 채움 */
const RecordTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  /* width: 1000px; */
  background: white;
  border-radius: 2px;
`;
champion();
const RecordTemplate = ({ children }) => {
  return (
    <RecordTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">OPGG</Link>
        </div>
        {children}
      </WhiteBox>
    </RecordTemplateBlock>
  );
};

export default RecordTemplate;
