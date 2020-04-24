import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as UsuarioApi from '../../utils/apis/UsuariosAPI';
import { FlatList } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {

    state = {
        info: '',
        confirmados: '',
        ausentes: '',
        aguardando: '',
    }
    async fetchData() {
        const dado = await UsuarioApi.passageiros()
        this.setState({ info: dado })


        this.setState({ confirmados: this.state.info.filter(item => item.status == 1) })
        this.setState({ ausentes: this.state.info.filter(item => item.status == 2) })
        this.setState({ aguardando: this.state.info.filter(item => item.status == 0) })
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#353535" }}>
                <Text style={styles.text}>Confirmados - </Text>
                <FlatList
                    data={this.state.confirmados}
                    renderItem={({ item }) =>
                        <View style={{ flexDirection: "row" }}>
                            <Ionicons name="md-contact" size={50}
                                style={{
                                    paddingTop: 5,
                                    marginLeft: 19,
                                }}
                                color="lightgray" />
                            <View style={{
                                width: 15,
                                height: 15,
                                borderRadius: 15 / 2,
                                borderWidth: 2,
                                borderColor: '#303030',
                                backgroundColor: "lime",
                                marginTop: 35,
                                marginLeft: 45,
                                position: 'absolute',
                                overflow: "hidden"
                            }} />
                            <Text style={styles.textA}>{item.Nome}</Text>
                        </View>
                    }

                />

                <Text style={styles.text}>Ausentes - </Text>
                <FlatList
                    data={this.state.ausentes}
                    renderItem={({ item }) =>
                        <View style={{ flexDirection: "row" }}>
                            <Ionicons name="md-contact" size={50}
                                style={{
                                    paddingTop: 5,
                                    marginLeft: 19,
                                }}
                                color="lightgray" />
                            <View style={{
                                width: 15,
                                height: 15,
                                borderRadius: 15 / 2,
                                borderWidth: 2,
                                borderColor: '#303030',
                                backgroundColor: "red",
                                marginTop: 35,
                                marginLeft: 45,
                                position: 'absolute',
                                overflow: "hidden"
                            }} />
                            <Text style={styles.textA}>{item.Nome}</Text>
                        </View>
                    }

                />
                <Text style={styles.text}>Aguardando - </Text>
                <FlatList
                    data={this.state.aguardando}
                    renderItem={({ item }) =>
                        <View style={{ flexDirection: "row" }}>
                            <Ionicons name="md-contact" size={50}
                                style={{
                                    paddingTop: 5,
                                    marginLeft: 19,
                                }}
                                color="lightgray" />
                            <View style={{
                                width: 15,
                                height: 15,
                                borderRadius: 15 / 2,
                                borderWidth: 2,
                                borderColor: '#303030',
                                backgroundColor: "orange",
                                marginTop: 35,
                                marginLeft: 45,
                                position: 'absolute',
                                overflow: "hidden"
                            }} />
                            <Text style={styles.textA}>{item.Nome}</Text>
                        </View>
                    }
                />
            </SafeAreaView>
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
    },
    text: {
        color: "lightgray",
        marginLeft: 19,
        fontSize: 15,
        fontWeight: "bold"
    },
    textA: {
        color: "lightgray",
        paddingTop: 15,
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 20
    }
});
