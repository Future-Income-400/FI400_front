import React, { useState } from 'react';
import LoginButton from '../../Component/LoginButton';
import {
  StyleSheet,
  View,
  ImageBackground,
  Linking,
  Alert
} from 'react-native';
import queryString from 'query-string';
import WebView from 'react-native-webview';
import jwt from 'jsonwebtoken';

// LoginScreen.
const LoginScreen = ({navigation, route}: any) => {
  const [showWebView, setShowWebView] = useState(false);
  const [authorizationCode, setAuthorizationCode] = useState('');

  // 카카오 로그인 버튼 이미지 파일의 Raw 경로
  const kakaoImagePath =
    'https://raw.githubusercontent.com/Future-Income-400/FI400_front/master/FI400_front/GlassBottleLetter/Image/kakao_login_large_wide.png';
  // 인스타 로그인 버튼 이미지 파일의 Raw 경로
  const instaImagePath =
    'https://raw.githubusercontent.com/Future-Income-400/FI400_front/master/FI400_front/GlassBottleLetter/Image/instagram_login_large_wide.png';

  const REST_API_KEY = '3ea849343e7ba259ab812b860ec4770a';
  const REDIRECT_URI = 'http://localhost:8081/kakao/callback';

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // 카카오 로그인 버튼 눌렀을 때 처리할 로직을 여기에 추가
  const kakaoButtonPress = async () => {
    setShowWebView(true);
  };

  // 인스타 로그인 버튼 눌렀을 때 처리할 로직을 여기에 추가
  const instaButtonPress = () => {
    navigation.navigate('MainScreen');
  };

  const handleWebViewNavigation = (navState: any) => {
    // 웹뷰의 네비게이션 상태가 변경될 때 처리할 로직 추가
    // navState에는 현재 URL 정보 등이 포함되어 있음.

    // 인가 코드 추출
    const parsedUrl = queryString.parseUrl(navState.url);
    const code: string | null = (parsedUrl.query as { [key: string]: string | null }).code || null;

    console.log(code);

    if (code) {
      // 인가 코드를 백엔드 API에 전송
      sendAuthorizationCodeToBackend(code);

      // Alert.alert('인가코드: \n' + code);

      setAuthorizationCode(code);
      setShowWebView(false); // 웹뷰 닫기
    }
  };

  const sendAuthorizationCodeToBackend = async (code: string) => {
    try {
      const response = await fetch('http://localhost:8080/user/saveuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      // 응답 처리
      if (response.ok) {
        // 요청이 성공한 경우
        console.log('인가 코드 전송 성공');
      } else {
        // 요청이 실패한 경우
        console.error('인가 코드 전송 실패');
      }
    } catch (error) {
      // console.error('네트워크 오류:', error);
    }
  };

  return (
    <ImageBackground
      source={require('../../Image/loginPage_background.png')}
      style={styles.container}>
      <View>
        <LoginButton
          imageSource={kakaoImagePath}
          onPress={kakaoButtonPress}
          style={{
            marginTop: 900,
            width: 250,
            height: 62,
            resizeMode: 'contain',
          }}
        />
        <LoginButton
          imageSource={instaImagePath}
          onPress={instaButtonPress}
          style={{
            marginTop: 920,
            width: 250,
            height: 62,
            resizeMode: 'contain',
          }}
        />
      </View>
      {showWebView && (
          <WebView
            source={{ uri: link }}
            onNavigationStateChange={handleWebViewNavigation}
          />
        )}
    </ImageBackground>
  );
};

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

export default LoginScreen;
