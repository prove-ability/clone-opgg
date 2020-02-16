import client from './client';

// 소환사 정보
export const summoner = id => {
  return client.get(`lol/summoner/v4/summoners/by-name/${id}`);
};

// 리그 정보
export const league = id => {
  return client.get(`lol/league/v4/entries/by-summoner/${id}`);
};

// matchlist
export const match = id => {
  return client.get(`/lol/match/v4/matchlists/by-account/${id}?season=13`);
};
