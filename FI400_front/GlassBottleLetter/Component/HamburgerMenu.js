//햄벅 메뉴 컴퓨넌트

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HamburgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <View style={styles.container}>
            <View style={styles.menuContainerclose}>
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
        flexDirection: 'row-reverse',
    },
    menuContainerclose: {
        flex: 1,
        height: '10%',
        backgroundColor: '#9AC5F4',
        position: 'absolute',
        left: 0,
        top: 0,
        flexDirection: 'row-reverse',
    },
    menuButton: {
        padding: 10,
    },
    menuButtonText: {
        fontSize: 20,
    },
    menu: {
        width: 240,
    },
    menuItem: {
        backgroundColor: '#99DBF5',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'space-around',
    },
});

export default HamburgerMenu;
