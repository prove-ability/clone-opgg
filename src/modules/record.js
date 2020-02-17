import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as recordAPI from '../lib/api/record';

const CHANGE_FIELD = 'record/CHANGE_FILED';
const INITIALZE_FORM = 'record/INITIALZE_FORM';

const [SUMMONER, SUMMONER_SUCCESS, SUMMONER_FAILURE] = createRequestActionTypes(
  'record/SUMMONER',
);
const [LEAGUE, LEAGUE_SUCCESS, LEAGUE_FAILURE] = createRequestActionTypes(
  'record/LEAGUE',
);
const [
  MATCH_LISTS,
  MATCH_LISTS_SUCCESS,
  MATCH_LISTS_FAILURE,
] = createRequestActionTypes('record/MATCH_LISTS');
// const [MATCH, MATCH_SUCCESS, MATCH_FAILURE] = createRequestActionTypes(
//   'record/MATCH',
// );

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const initializeForm = createAction(INITIALZE_FORM, value => value);
export const getSummoner = createAction(SUMMONER, id => id);
export const getLeague = createAction(LEAGUE, id => id);
export const getMatchlists = createAction(MATCH_LISTS, id => id);
// export const getMatch = createAction(MATCH, id => id);

// 사가 생성
const summonerSaga = createRequestSaga(SUMMONER, recordAPI.summoner);
const leagueSaga = createRequestSaga(LEAGUE, recordAPI.league);
const matchlistsSaga = createRequestSaga(MATCH_LISTS, recordAPI.matchlists);
// const matchSaga = createRequestSaga(MATCH, recordAPI.match);
export function* recordSaga() {
  yield takeLatest(LEAGUE, leagueSaga);
  yield takeLatest(SUMMONER, summonerSaga);
  yield takeLatest(MATCH_LISTS, matchlistsSaga);
  // yield takeLatest(MATCH, matchSaga);
}

const initialState = {
  username: '',
  summoner: null,
  summonerError: null,
  league: null,
  leagueError: null,
  matchlists: null,
  matchlistsError: null,
  // match: null,
  // matchError: null,
};

const record = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, draft => {
        draft[key] = value;
      }),
    [INITIALZE_FORM]: (state, { payload }) =>
      produce(state, draft => {
        draft[payload] = initialState[payload];
      }),
    [SUMMONER_SUCCESS]: (state, { payload }) => ({
      ...state,
      summoner: payload,
    }),
    [SUMMONER_FAILURE]: (state, { payload: { message } }) => ({
      ...state,
      summonerError: message,
    }),
    [LEAGUE_SUCCESS]: (state, { payload }) => ({
      ...state,
      league: payload[0],
    }),
    [LEAGUE_FAILURE]: (state, { payload: { message } }) => ({
      ...state,
      leagueError: message,
    }),
    [MATCH_LISTS_SUCCESS]: (state, { payload }) => ({
      ...state,
      matchlists: payload,
    }),
    [MATCH_LISTS_FAILURE]: (state, { payload: { message } }) => ({
      ...state,
      matchlistsError: message,
    }),
    // [MATCH_SUCCESS]: (state, { payload }) => ({
    //   ...state,
    //   match: payload,
    // }),
    // [MATCH_FAILURE]: (state, { payload: { message } }) => ({
    //   ...state,
    //   matchError: message,
    // }),
  },
  initialState,
);

export default record;
