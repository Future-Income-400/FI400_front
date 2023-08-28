import React from 'react';
import LoginButton from '../../Component/LoginButton';
import {
  StyleSheet,
  View,
  ImageBackground,
  Linking,
} from 'react-native';
import queryString from 'query-string';
import { useRoute } from '@react-navigation/native';

// LoginScreen.
const LoginScreen = ({navigation, route}: any) => {
  // 카카오 로그인 버튼 이미지 파일의 Raw 경로
  const kakaoImagePath =
    'https://raw.githubusercontent.com/Future-Income-400/FI400_front/master/FI400_front/GlassBottleLetter/Image/kakao_login_large_wide.png';
  // 인스타 로그인 버튼 이미지 파일의 Raw 경로
  const instaImagePath =
    'https://raw.githubusercontent.com/Future-Income-400/FI400_front/master/FI400_front/GlassBottleLetter/Image/instagram_login_large_wide.png';

  const REST_API_KEY = '3ea849343e7ba259ab812b860ec4770a';
  const REDIRECT_URI = 'http://localhost:8081/kakao/callback';

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // const Route = useRoute();

  // console.log(Route.name);

  // 카카오 로그인 버튼 눌렀을 때 처리할 로직을 여기에 추가
  const kakaoButtonPress = async () => {
    Linking.openURL(link);

    const url = "http://localhost:8080/kakao/callback?code=9ca1up-AbgMQGXpCkpcFbrVvVPOyel2uyHI8g3Gdrf8IVdI-7v4RYZOPt_pvfdbpCvLDCwo9cpgAAAGKGFt9hQ";

    const parsedUrl = queryString.parseUrl(url);
    const code: string | null = (parsedUrl.query as { [key: string]: string | null }).code || null;

    if (code) {
      console.log(code);  // 여기서 코드 값을 확인할 수 있어용~!
    } else {
      console.log('코드가 없어용 ㅠㅅㅠ');
    }
    
  };

  // 인스타 로그인 버튼 눌렀을 때 처리할 로직을 여기에 추가
  const instaButtonPress = () => {
    navigation.navigate('MainScreen');
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
