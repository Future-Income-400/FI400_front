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
  ImageBackground,
} from 'react-native';

function App(): JSX.Element {
  // 카카오 로그인 버튼 이미지 파일의 Raw 경로
  const kakaoImagePath = 'https://raw.githubusercontent.com/Future-Income-400/FI400_front/master/FI400_front/GlassBottleLetter/Image/kakao_login_large_wide.png';
  // 인스타 로그인 버튼 이미지 파일의 Raw 경로
  const instaImagePath = 'https://raw.githubusercontent.com/Future-Income-400/FI400_front/master/FI400_front/GlassBottleLetter/Image/instagram_login_large_wide.png';

  const kakaoButtonPress = () => {
    // 카카오 로그인 버튼 눌렀을 때 처리할 로직을 여기에 추가
    Alert.alert('카카오버튼 잘 작동');
  }
  const instaButtonPress = () => {
    // 인스타 로그인 버튼 눌렀을 때 처리할 로직을 여기에 추가
    Alert.alert('인스타버튼 잘 작동');
  }

  return (
    <ImageBackground source={require('./Image/loginPage_background.png')} style={styles.container}>
      <View>
        <LoginButton
          imageSource={kakaoImagePath}
          onPress={kakaoButtonPress}
          style={{
            marginTop: 1000,
            width: 250,
            height: 62,
            resizeMode: 'contain'
          }}
        />
        <LoginButton
          imageSource={instaImagePath}
          onPress={instaButtonPress}
          style={{
            marginTop: 1150,
            width: 250,
            height: 62,
            resizeMode: 'contain'
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
