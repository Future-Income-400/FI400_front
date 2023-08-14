import React, {useState} from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';

interface Props {
    navigation: any;
}

const BackpackMenu: React.FC<Props> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const InboxButtonPress = () => {
    props.navigation.navigate('InboxScreen');
  }

  const SentLetterButtonPress = () => {
    props.navigation.navigate('SentLetterScreen');
  }

  const LetterWritingButtonPress = () => {
    props.navigation.navigate('LetterWritingScreen');
  }

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Image source={require('../Image/backpack.png')} style={styles.menuImage} />
        </TouchableOpacity>
        {isMenuOpen && (
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem} onPress={InboxButtonPress} >
              <Text>받은편지함</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={SentLetterButtonPress} >
              <Text>보낸편지함</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={LetterWritingButtonPress} >
              <Text>편지쓰기</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  menuContainer: {
    position: 'relative',
  },
  menuButton: {
    padding: 10,
  },
  menuImage: {
    width: 40, // 이미지의 너비
    height: 40, // 이미지의 높이
  },
  menu: {
    top: 0,
    right: 0,
    width: 200,
    backgroundColor: '#99DBF5',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 5,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default BackpackMenu;
