import axios from 'axios';

const SEVER_ADDRESS = 'http://bottleletter.com/api';

const apiService = axios.create({
  baseURL: SEVER_ADDRESS,
  headers: {},
});

export default apiService;
