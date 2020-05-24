import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, getSummoner } from '../../modules/record';
import RecordSearchForm from '../../components/record/RecordSearchForm';

const RecordSearchFormC = () => {
  const dispatch = useDispatch();
  const { username } = useSelector(({ record }) => ({
    username: record.username,
  }));

  // 인풋 변경 이벤트 헨들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
  };

  // 폼 등록 이벤트 헨들러
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getSummoner({ username }));
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    dispatch(initializeForm('username'));
  }, [dispatch]);

  return (
    <RecordSearchForm
      username={username}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RecordSearchFormC;
