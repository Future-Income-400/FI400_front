import React, { Component } from 'react';
import { View, StyleSheet, Animated, Easing, ImageBackground } from 'react-native';

class BeachAnimation extends Component {
  waveAnimation = new Animated.Value(0);
  cloudAnimation = new Animated.Value(0);

  componentDidMount() {
    this.startWaveAnimation();
    this.startCloudAnimation();
  }

  startWaveAnimation() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.waveAnimation, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(this.waveAnimation, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }

  startCloudAnimation() {
    Animated.loop(
      Animated.timing(this.cloudAnimation, {
        toValue: 1.5,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }

  render() {
    const waveTranslateY = this.waveAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 20], // 위 아래로 움직이게 설정 (20은 픽셀 수)
    });

    const cloudTranslateX = this.cloudAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [-10, 100],
    });

    return (
      <ImageBackground
        source={require('../Image/beach.png')}
        style={styles.BackgroundContainer}>
        <View style={styles.container}>
          <Animated.Image
            source={require('../Image/wave.png')}
            style={[
              styles.wave,
              { transform: [{ translateY: waveTranslateY }] },
            ]}
          />
          <Animated.Image
            source={require('../Image/wave.png')}
            style={[
              styles.wave2,
              { transform: [{ translateY: waveTranslateY }] },
            ]}
          />
          <Animated.Image
            source={require('../Image/wave.png')}
            style={[
              styles.wave3,
              { transform: [{ translateY: waveTranslateY }] },
            ]}
          />
          <Animated.Image
            source={require('../Image/wave.png')}
            style={[
              styles.wave4,
              { transform: [{ translateY: waveTranslateY }] },
            ]}
          />

          
          <Animated.Image
            source={require('../Image/sun.png')} // sun
            style={[styles.sun, {alignSelf: 'center'}]}
          />


          <Animated.Image
            source={require('../Image/cloud.png')} // cloud
            style={[
              styles.cloud,
              { transform: [{ translateX: cloudTranslateX }] },
            ]}
          />
          <Animated.Image
            source={require('../Image/cloud.png')} // cloud
            style={[
              styles.cloud2,
              { transform: [{ translateX: cloudTranslateX }] },
            ]}
          />
          <Animated.Image
            source={require('../Image/cloud.png')} // cloud
            style={[
              styles.cloud3,
              { transform: [{ translateX: cloudTranslateX }] },
            ]}
          />
          <Animated.Image
            source={require('../Image/cloud.png')} // cloud
            style={[
              styles.cloud4,
              { transform: [{ translateX: cloudTranslateX }] },
            ]}
          />
          <Animated.Image
            source={require('../Image/cloud.png')} // cloud
            style={[
              styles.cloud5,
              { transform: [{ translateX: cloudTranslateX }] },
            ]}
          />
          <Animated.Image
            source={require('../Image/cloud.png')} // cloud
            style={[
              styles.cloud6,
              { transform: [{ translateX: cloudTranslateX }] },
            ]}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#87CEEB', // 바다 색상
  },
  BackgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
  },
  wave: {
    position: 'absolute',
    bottom: 210,
    width: '25%',
    height: 100,
    left: 0,
  },
  wave2: {
    position: 'absolute',
    bottom: 210,
    width: '25%',
    height: 100,
    left: 100,
  },
  wave3: {
    position: 'absolute',
    bottom: 210,
    width: '25%',
    height: 100,
    left: 200,
  },
  wave4: {
    position: 'absolute',
    bottom: 210,
    width: '25%',
    height: 100,
    left: 300,
  },
  sun: {
    position: 'absolute',
    top: '50%', // 화면 세로 중앙으로 이동
    left: '50%', // 화면 가로 중앙으로 이동
    transform: [{ translateX: -50 }, { translateY: -280 }], // 중앙 정렬을 위한 변환
    width: 120,
    height: 120,
  },
  cloud: {
    position: 'absolute',
    top: 100,
    left: 0,
    width: 75,
    height: 50,
  },
  cloud2: {
    position: 'absolute',
    top: 50,
    left: 100,
    width: 75,
    height: 50,
  },
  cloud3: {
    position: 'absolute',
    top: 150,
    left: 150,
    width: 75,
    height: 50,
  },
  cloud4: {
    position: 'absolute',
    top: 90,
    left: 270,
    width: 75,
    height: 50,
  },
  cloud5: {
    position: 'absolute',
    top: 40,
    left: -100,
    width: 75,
    height: 50,
  },
  cloud6: {
    position: 'absolute',
    top: 130,
    left: -150,
    width: 75,
    height: 50,
  },
  light: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // 햇빛 색상
  },
});

export default BeachAnimation;