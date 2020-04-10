import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class MenuButton extends React.Component {
    render() {
        return (
            <Ionicons
                name="md-people"
                color="black"
                size={35}
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
        top: "1%",
        left: "85%",
        paddingLeft: 10,
        paddingRight: 10,
    }
});