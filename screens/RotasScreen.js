import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import MenuButton from '../components/Tabs/MenuButton';

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <MenuButton onPress={() => this.props.navigation.toggleDrawer()} />
                    <Ionicons
                        name="md-add"
                        color="black"
                        size={32}
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
        top: "5%",
        right: 20,
    }

});
