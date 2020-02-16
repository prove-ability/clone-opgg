import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

/**
 * 전검 검색 양식
 */

const RecordSearchFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const Input = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  /* padding-bottom: 0.5rem; */
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
  flex: 4;
`;

const Form = styled.form`
  display: flex;
  padding-left: 1rem;
  width: 100%;
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
  flex: 1;
`;

const RecordSearchForm = ({ username, onChange, onSubmit }) => {
  return (
    <RecordSearchFormBlock>
      <h3>전적검색</h3>
      <Form onSubmit={onSubmit}>
        <Input
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={username}
        />
        <ButtonWithMarginTop fullWidth indigo>
          검색
        </ButtonWithMarginTop>
      </Form>
    </RecordSearchFormBlock>
  );
};

export default React.memo(RecordSearchForm);
