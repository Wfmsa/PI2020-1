import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import MenuButton from '../components/Tabs/MenuButton';

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <MenuButton onPress={() => this.props.navigation.toggleDrawer()} />
                    <Ionicons
                        name="md-add"
                        color="black"
                        size={35}
                        style={styles.addIcon}
                    />
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    addIcon: {
        zIndex: 9,
        position: "absolute",
        top: "1%",
        right: 20,
    }

});
