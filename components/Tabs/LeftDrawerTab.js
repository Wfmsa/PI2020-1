import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Alert,
    AsyncStorage,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as UsuarioRepositorio from '../../repositorios/UsuarioRepositorio';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationActions } from 'react-navigation';

export default class LeftDrawerTan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            screen: props.navigation.state.routeName,
        }
    }

    async fetchData() {
        const dados = await UsuarioRepositorio.buscarTodos()
        this.setState({ data: dados[0] })
    }

    componentDidMount() {
        this.fetchData();
    }

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }


    render() {
        if (this.state.data.tipo !== 0) {
            return (
                <SafeAreaView style={{ backgroundColor: "#353535", flex: 1 }}>
                    <View style={{ height: 150, backgroundColor: '#252525', alignItems: "center", justifyContent: "center" }}>
                        <TouchableOpacity onPress={this.navigateToScreen('Profile')}>
                            <Ionicons name="md-contact" size={80} color="lightgray" />
                            <Text style={{ color: "lightgray", fontWeight: "bold", alignSelf: "center" }}>{this.state.data.nome}</Text>
                        </TouchableOpacity>

                    </View>
                    <ScrollView>
                        <TouchableOpacity onPress={this.navigateToScreen('Map')} style={styles.container}>
                            <Ionicons name="md-map" size={24} style={styles.icon} color="lightgray" />
                            <Text style={styles.text}>Mapa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: "row" }} onPress={() =>
                            Alert.alert(
                                'Sair',
                                'Você deseja sair da sua conta?',
                                [
                                    { text: 'Cancelar', onPress: () => { return null } },
                                    {
                                        text: 'Confirmar', onPress: () => {
                                            AsyncStorage.clear();
                                            this.props.navigation.navigate('Login')
                                        }
                                    },
                                ],
                                { cancelable: false }
                            )
                        }>
                            <Ionicons name="md-log-out" size={24} style={styles.icon} color="lightgray" />
                            <Text style={styles.text}>Sair</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </SafeAreaView>
            );
        }
        return (
            <SafeAreaView style={{ backgroundColor: "#353535", flex: 1 }}>
                <View style={{ height: 150, backgroundColor: '#252525', alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity onPress={this.navigateToScreen('Profile')}>
                        <Ionicons name="md-contact" size={80} color="lightgray" />
                        <Text style={{ color: "lightgray", fontWeight: "bold", alignSelf: "center" }}>{this.state.data.nome}</Text>
                    </TouchableOpacity>

                </View>
                <ScrollView>
                    <TouchableOpacity onPress={this.navigateToScreen('Map')} style={styles.container}>
                        <Ionicons name="md-map" size={24} style={styles.icon} color="lightgray" />
                        <Text style={styles.text}>Mapa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "row" }} onPress={() =>
                        Alert.alert(
                            'Sair',
                            'Você deseja sair da sua conta?',
                            [
                                { text: 'Cancelar', onPress: () => { return null } },
                                {
                                    text: 'Confirmar', onPress: () => {
                                        AsyncStorage.clear();
                                        this.props.navigation.navigate('Login')
                                    }
                                },
                            ],
                            { cancelable: false }
                        )
                    }>
                        <Ionicons name="md-log-out" size={24} style={styles.icon} color="lightgray" />
                        <Text style={styles.text}>Sair</Text>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "row"
    },

    active: {
        flex: 1,
        backgroundColor: "#353535",
    },
    icon: {
        paddingTop: 15,
        marginLeft: 19
    },
    text: {
        color: "lightgray",
        paddingTop: 17,
        marginLeft: 34,
        fontWeight: 'bold',
    }
})

