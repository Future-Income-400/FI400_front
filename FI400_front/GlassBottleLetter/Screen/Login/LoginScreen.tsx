import React, {useState, useEffect} from 'react';
import LoginButton from '../../Component/LoginButton';
import {StyleSheet, Alert, View, ImageBackground, Linking,Text} from 'react-native';

// LoginScreen.
const LoginScreen = ({navigation, route}: any) => {
  // 카카오 로그인 버튼 이미지 파일의 Raw 경로
  const kakaoImagePath =
    'https://raw.githubusercontent.com/Future-Income-400/FI400_front/master/FI400_front/GlassBottleLetter/Image/kakao_login_large_wide.png';
  // 인스타 로그인 버튼 이미지 파일의 Raw 경로
  const instaImagePath =
    'https://raw.githubusercontent.com/Future-Income-400/FI400_front/master/FI400_front/GlassBottleLetter/Image/instagram_login_large_wide.png';

  const REST_API_KEY ='3ea849343e7ba259ab812b860ec4770a';
  const REDIRECT_URI ='http://localhost:8081/kakao/callback';

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // URL 문자열을 파싱하여 파라미터 값을 추출
  // const code = new URL(dococument.location.toString()).searchParams.get('code');

  const kakaoButtonPress = () => {
    // 카카오 로그인 버튼 눌렀을 때 처리할 로직을 여기에 추가
    // Alert.alert('카카오버튼 잘 작동');
    Linking.openURL(link);
  };

  const instaButtonPress = () => {
    // 인스타 로그인 버튼 눌렀을 때 처리할 로직을 여기에 추가
    // Alert.alert('인스타버튼 잘 작동');
    navigation.navigate('MainScreen');
  };

  return (
    <ImageBackground
      source={require('../../Image/loginPage_background.png')}
      style={styles.container}>
      <View>
        {/* <Text>{code}</Text> */}
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
