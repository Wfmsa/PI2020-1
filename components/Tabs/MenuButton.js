import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class MenuButton extends React.Component {
    render() {
        return (
            <Ionicons
                name="md-menu"
                color="black"
                size={32}
                style={styles.menuIcon}
                onPress={() => this.props.onPress()}
            />
        );
    }
}

const styles = StyleSheet.create({
    menuIcon: {
        zIndex: 9,
        position: "absolute",
        top: 35,
        left: 20
    }
});