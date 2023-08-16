import axios from 'axios';

const SEVER_ADDRESS = 'http://bottleletter.com/api';

export const Axios = axios.create({
  baseURL: SEVER_ADDRESS,
  headers: {},
});
