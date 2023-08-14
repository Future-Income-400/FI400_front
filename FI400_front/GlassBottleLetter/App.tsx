import React from 'react';
import {StyleSheet} from 'react-native';

// Routing 관련 Libreary
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screen import
import LoginScreen from './Screen/Login/LoginScreen';
import MainScreen from './Screen/Main/MainScreen';
import InboxScreen from './Screen/Main/Inbox';
import SentLetterScreen from './Screen/Main/SentLetter';
import LetterWritingScreen from './Screen/Main/LetterWriting';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="InboxScreen" component={InboxScreen} />
        <Stack.Screen name="SentLetterScreen" component={SentLetterScreen} />
        <Stack.Screen name="LetterWritingScreen" component={LetterWritingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
