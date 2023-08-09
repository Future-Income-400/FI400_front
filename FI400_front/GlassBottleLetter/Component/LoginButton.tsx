//로그인 버튼 컴포넌트
import React from 'react';
import { Image, ImageStyle, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

interface LoginButtonProps {
  // imageSource: string;
  onPress?: () => void;
  style?: ImageStyle & ViewStyle;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onPress, style}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity testID='login-button' onPress={onPress} style={style}>
        <Image
          source={require('../Image/kakao_login_large_wide.png')}
          style={styles.LoginButton}
        />
      </TouchableOpacity>
    </View>
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
    width: 250,
    height: 62,
    resizeMode: 'contain', // 이미지 크기를 유지한 채 비율에 맞춰 채움
  },
});

export default LoginButton;