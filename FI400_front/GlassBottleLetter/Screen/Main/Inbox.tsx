import React from 'react';
import { View, Text } from 'react-native';

interface Props {
    navigation: any;
}

const Inbox: React.FC<Props> = (props) => {
    return (
        <View>
            <Text>받은편지함 화면</Text>
        </View>
    )
}

export default Inbox;