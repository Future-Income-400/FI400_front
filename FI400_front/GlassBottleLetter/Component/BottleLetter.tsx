/* 기능 
  랜덤 발송된 편지 받아오기 > 받아와서 이미지에 연결 > 이미지 탭하면 유저의 수신함으로 보냄
*/
import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {getLetter, postLetter} from '../Apis/LetterApi';
import {useCookies} from 'react-cookie';

//랜덤 발송된 편지 API 저장
const LetterComponent = () => {
  /* const [cookies, getCookies] = useCookies(['userInfo']);
  const token = cookies.userInfo.token;
  const [receivedLetter, setReceivedLetter] = useState(null);
  useEffect(() => {
    fetchRandomLetter();
  }, []);
  
  //편지 받기
  const fetchRandomLetter = async () => {
    try {
      const response = await getLetter(token);
      setReceivedLetter(response.data);
    } catch (error) {
      console.error('편지 오류:', error);
    }
  };
  // 탭 했을 시 편지 보내졌나 확인
  const handleImageTap = async () => {
    const response = await postLetter(token, {
      content: setReceivedLetter,
    });
    console.log('편지 발싸');
    if (response.code === 500) {
      console.error('편지 오류:');
    }
  };
  */

  return (
    <View>
      {/* {receivedLetter ? ( */}
      <View>
        {/* <TouchableOpacity onPress={handleImageTap}> */}
        <Image
          source={require('../Image/Bottle.png')}
          style={{width: 30, height: 30}}
        />
        {/* </TouchableOpacity> */}
      </View>
      {/* ) : (
        <Text>편지가 없어용</Text>
      )} */}
    </View>
  );
};

export default LetterComponent;
