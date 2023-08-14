import React from 'react';
import { View, Text } from 'react-native';

interface Props {
    navigation: any;
}

const SentLetter: React.FC<Props> = (props) => {
    return (
        <View>
            <Text>보낸편지함 화면</Text>
        </View>
    )
}

export default SentLetter;