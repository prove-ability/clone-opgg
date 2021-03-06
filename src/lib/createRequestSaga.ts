import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionTypes = (type: any) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type: any, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  let param = {};
  return function* (action: {
    payload: { username: {}; summonerId: {}; accountId: {} };
  }) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      switch (type) {
        case 'record/SUMMONER':
          param = action.payload.username;
          break;
        case 'record/LEAGUE':
          param = action.payload.summonerId;
          break;
        case 'record/MATCH_LISTS': // matchlists
          param = action.payload.accountId;
          break;
        default:
          break;
      }
      const response = yield call(request, param);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}
