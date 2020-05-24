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
export const initializeForm = createAction(
  INITIALZE_FORM,
  (value: any) => value,
);
export const getSummoner = createAction(SUMMONER, (id: any) => id);
export const getLeague = createAction(LEAGUE, (id: any) => id);
export const getMatchlists = createAction(MATCH_LISTS, (id: any) => id);
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
};

const record = handleActions(
  {
    [CHANGE_FIELD]: (state: any, { payload: { key, value } }: any) =>
      produce(state, (draft: { [x: string]: any }) => {
        draft[key] = value;
      }),
    [INITIALZE_FORM]: (state: any, { payload }: any) =>
      produce(state, (draft: { [x: string]: any }) => {
        draft[payload] = initialState[payload];
      }),
    [SUMMONER_SUCCESS]: (state: any, { payload }: any) => ({
      ...state,
      summoner: payload,
    }),
    [SUMMONER_FAILURE]: (state: any, { payload: { message } }: any) => ({
      ...state,
      summonerError: message,
    }),
    [LEAGUE_SUCCESS]: (state: any, { payload }: any) => ({
      ...state,
      league: payload[0],
    }),
    [LEAGUE_FAILURE]: (state: any, { payload: { message } }: any) => ({
      ...state,
      leagueError: message,
    }),
    [MATCH_LISTS_SUCCESS]: (state: any, { payload }: any) => ({
      ...state,
      matchlists: payload,
    }),
    [MATCH_LISTS_FAILURE]: (state: any, { payload: { message } }: any) => ({
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
