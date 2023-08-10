/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import LoginButton from './Component/LoginButton';
import {
  StyleSheet,
  Alert,
  View,
} from 'react-native';

function App(): JSX.Element {
  // 카카오 원본 이미지 파일의 Raw 경로
  const kakaoImagePath = 'https://raw.githubusercontent.com/Future-Income-400/FI400_front/8018164c45e51f6415602ac74bd375492e29e2b7/FI400_front/GlassBottleLetter/Image/kakao_login_large_wide.png';

  const kakaoButtonPress = () => {
    // 로그인 버튼 눌렀을 때 처리할 로직을 여기에 추가
    Alert.alert('버튼 잘 작동');
  }

  return (
    <View>
      <LoginButton
        imageSource={kakaoImagePath}
        onPress={kakaoButtonPress}
        style={{
          marginTop: 900,
          width: 250,
          height: 62,
          resizeMode: 'contain'
        }}
      />
    </View>
  );
}

export default App;
