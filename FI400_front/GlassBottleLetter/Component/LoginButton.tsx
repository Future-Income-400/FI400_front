//로그인 버튼 컴포넌트
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const LoginButton = () => {
  const handleImagePress = () => {
    // 로그인 버튼 눌렀을 때 처리할 로직을 여기에 추가

  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleImagePress}>
      <Image
        source={require('../Image/kakao_login_large_wide.png')}
        style={styles.LoginButton}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  LoginButton: {
    marginTop: 300,
    width: 250, // 버튼 너비
    height: 62, // 버튼 높이
    resizeMode: 'contain', // 이미지 크기를 유지한 채 비율에 맞춰 채움
  },
});

export default LoginButton;