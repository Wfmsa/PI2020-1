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

                    <View style={{
                        justifyContent: 'space-around'
                    }}>

                        <CheckBox
                            value={this.state.checked}
                            uncheckedColor={"ligthgray"}
                            onValueChange={() => this.setState({ checked: !this.state.checked })}
                            style={{ marginLeft: "5%", marginTop: 10 }}
                        />
                        <Text style={{ color: "lightgray", paddingLeft: "20%", paddingTop: 0 }}>Lembrar-me!</Text>
                        <Text style={{ color: "lightgray", paddingLeft: "50%", paddingTop: 0 }}>Esqueceu sua senha?</Text>

                    </View>
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
