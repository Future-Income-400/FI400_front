import React from 'react';
import { View, Text } from 'react-native';

interface Props {
    navigation: any;
}

const LetterWriting: React.FC<Props> = (props) => {
    return (
        <View>
            <Text>편지쓰기 화면</Text>
        </View>
    )
}

export default LetterWriting;