import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>☰</Text>
        </TouchableOpacity>
        {isMenuOpen && (
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem}>
              <Text>알림 설정</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text>유리병 구매</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text>로그아웃</Text>
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
    marginLeft: 'auto',
  },
  menuButtonText: {
    fontSize: 30,
  },
  menu: {
    top: 0,
    left: 0,
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

export default HamburgerMenu;
