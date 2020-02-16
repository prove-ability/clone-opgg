import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import record, { recordSaga } from './record';
import loading from './loading';

const rootReducer = combineReducers({
  record,
  loading,
});

export function* rootSaga() {
  yield all([recordSaga()]);
}

export default rootReducer;
