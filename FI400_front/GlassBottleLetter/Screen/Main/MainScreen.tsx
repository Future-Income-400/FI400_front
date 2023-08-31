import React from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';
import HamburgerMenu from '../../Component/HamburgerMenu';
import BackpackMenu from '../../Component/BackpackMenu';

// MainScreen.
const MainScreen = ({navigation}: any) => {
  return (
    <ImageBackground
      source={require('../../Image/beach.png')}
      style={styles.backContainer}>
      <View style={styles.container}>
        <View style={styles.topLeft}>
          <BackpackMenu navigation={navigation} />
        </View>
        <View style={styles.topRight}>
          <HamburgerMenu />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backContainer: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
  topRight: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default MainScreen;
