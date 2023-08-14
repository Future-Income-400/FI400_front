import {Axios} from './ApiService';

// 랜덤 편지 받아오기
export const getLetter = async token => {
  //임시주소
  const res = await Axios.get('/letter/receive?userId=${userId}', {
    headers: {
      Authorization: token,
    },
  });
  if (res.data.code === 200) {
    return res.data.content; // 수정해야함
  } else {
    return res.data.content; // 수정해야함
  }
};

//편지 보내기
export const postLetter = async (token, letter) => {
  //임시주소
  const res = await Axios.post('/letter/backpack', letter, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

//랜덤 편지 보내기
export const randomLetter = async (token, content) => {
  //임시주소
  const res = await Axios.post('/letter/random', content, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};
