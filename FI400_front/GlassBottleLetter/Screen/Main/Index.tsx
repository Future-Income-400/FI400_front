import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

// MainScreen.
const Index = ({ navigation }: any) => {
    return (
        <View
            style={styles.container}
        >
            <Button 
                title='LoginScreen으로 이동'
                onPress={() => navigation.navigate("LoginScreen")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Index;