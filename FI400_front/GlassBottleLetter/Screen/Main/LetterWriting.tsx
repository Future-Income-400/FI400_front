import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import WritingComponent from '../../Component/WritingComponent';

interface Props {
  navigation: any;
}

const LetterWriting: React.FC<Props> = props => {
  return (
    <ImageBackground
      source={require('../../Image/beach.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Other components */}
        {/* 다른 컴포넌트들을 넣으세요 */}
      </View>
      {/* WritingComponent를 화면 하단에 위치 */}
      <View style={styles.writingContainer}>
        <WritingComponent />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // 화면을 꽉 채우도록 설정
  },
  container: {
    flex: 1, // 화면을 꽉 채우도록 설정
    justifyContent: 'space-between', // 컨테이너 내부 요소 사이의 공간을 고르게 분배
  },
  writingContainer: {
    // WritingComponent를 화면 하단에 위치시키려면 아래와 같이 스타일을 설정합니다.
    marginBottom: 16, // 원하는 만큼의 여백을 설정
    paddingHorizontal: 16, // 좌우 여백을 설정
  },
});

export default LetterWriting;
