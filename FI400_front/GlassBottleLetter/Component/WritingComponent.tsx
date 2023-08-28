//편지 작성 화면
import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  StyleSheet,
} from 'react-native';

const LetterWritingComponent: React.FC = () => {
  const [letter, setLetter] = useState<string>(''); // 편지 내용을 저장하는 상태

  // 편지 전송 함수
  const sendLetter = () => {
    // letter 상태에 저장된 편지 내용을 전송하도록 구현
    console.log('전송된 편지:', letter);
    // 전송 후 입력창 초기화
    setLetter('');
    // 키보드 숨기기
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      {/* 텍스트 입력란과 전송 버튼을 가로로 나란히 배치 */}
      <View style={styles.inputContainer}>
        {/* 텍스트 입력란 */}
        <TextInput
          multiline
          placeholder="편지를 작성하세요..."
          value={letter}
          onChangeText={text => setLetter(text)}
          style={styles.inputBox}
        />

        {/* 전송 버튼 */}
        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendLetter}
          disabled={letter.trim() === ''}>
          <Text style={styles.sendButtonText}>전송</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  inputContainer: {
    backgroundColor: 'white',
    flexDirection: 'row', // 수평 방향으로 자식 컴포넌트 배치
    alignItems: 'center', // 자식 컴포넌트를 수직 중앙 정렬
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 24, // 입력 상자와 버튼 컨테이너의 모양을 동그란 모양으로 만듭니다.
  },
  sendButton: {
    marginLeft: 10, // 왼쪽 여백을 10px로 설정
    backgroundColor: 'green', // 전송 버튼 배경색
    borderRadius: 24, // 반지름을 절반으로 하여 동그란 모양으로 만듭니다.
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sendButtonText: {
    color: 'white', // 전송 버튼 텍스트 색상
  },
  inputBox: {
    flex: 1, // 남은 공간을 모두 채우도록 설정
    height: 48, // 입력 상자의 높이를 설정합니다.
    paddingHorizontal: 16,
  },
});

export default LetterWritingComponent;
