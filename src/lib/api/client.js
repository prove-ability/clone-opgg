import axios from 'axios';

const client = axios.create();

// 헤더 설정
client.defaults.headers.common['X-Riot-Token'] =
  'RGAPI-266ef08e-cbaf-44ea-b54b-a765d113c1e2';

/*
  글로벌 설정 예시:
  // API 주소를 다른 곳으로 사용함
  client.defaults.baseURL = https://external-api-server.com/'

  // 인터셉터 설정
  axios.intercepter.response.use(\
    response => {
      // 요청 설공시 특정 작업 수행
      return response;
    },
    error => {
      // 요청 실패시 특정 작업 수행
      return Promise.reject(error);
    }
  )
*/

export default client;
