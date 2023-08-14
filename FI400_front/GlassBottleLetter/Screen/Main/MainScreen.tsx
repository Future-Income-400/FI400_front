import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import HamburgerMenu from '../../Component/HamburgerMenu';
import BottleLetter from '../../Component/BottleLetter';
// MainScreen.
const MainScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <BottleLetter />
      <HamburgerMenu />
      <Button
        title="LoginScreen으로 이동"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
