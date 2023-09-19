import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import Svg, { Line, Circle } from 'react-native-svg';

const WaveAnimation = () => {
  const dotCount = 8; // 움직이는 점의 개수

  const translateYValues = [...Array(dotCount)].map(() => new Animated.Value(0));

  useEffect(() => {
    const animations = translateYValues.map((value, index) => {
      const delay = index * 200; // 점들 간의 애니메이션 딜레이 조절
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay), // 딜레이 적용
          Animated.timing(value, {
            toValue: 20, // Y축 이동 거리
            duration: 500,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
          Animated.timing(value, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
        ])
      );
    });

    Animated.parallel(animations).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {translateYValues.map((value, index) => (
          <Animated.View
            key={index}
            style={[
              styles.dot,
              {
                transform: [{ translateY: value }],
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row', // 점들을 가로로 배열
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
    marginHorizontal: 15, // 점들 사이의 간격 조절
    marginTop: 180,
  },
})

export default WaveAnimation