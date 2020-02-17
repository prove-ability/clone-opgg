import client from './client';

// 소환사 정보
export const summoner = id =>
  client.get(`lol/summoner/v4/summoners/by-name/${id}`);
// 리그 정보
export const league = id =>
  client.get(`lol/league/v4/entries/by-summoner/${id}`);

// matchlists
export const matchlists = id =>
  client.get(`/lol/match/v4/matchlists/by-account/${id}?season=13`);

// match
export const getMatch = id => client.get(`/lol/match/v4/matches/${id}`);
