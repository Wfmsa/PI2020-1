import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as UsuarioApi from '../../utils/apis/UsuariosAPI';
import { FlatList, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import * as UsuarioRepositorio from '../../repositorios/UsuarioRepositorio';

export default class RightDrawerTab extends Component {

    state = {
        info: '',
        confirmados: '',
        ausentes: '',
        aguardando: '',
        data: '',
        date: '',
    }
    async fetchData() {
        const dado = await UsuarioApi.passageiros()
        this.setState({ info: dado })

        const dados = await UsuarioRepositorio.buscarTodos()
        this.setState({ data: dados[0] })


        this.setState({ confirmados: this.state.info.filter(item => item.status == 1) })
        this.setState({ ausentes: this.state.info.filter(item => item.status == 2) })
        this.setState({ aguardando: this.state.info.filter(item => item.status == 0) })

    }

    getDate() {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds

        this.setState({
            date:
                date + '/' + month + '/' + year + ' - ' + hours + ':' + min + ':' + sec,
        });
    }

    statusConfirmado() {
        this.getDate();
        const dados = {
            "id": this.state.data.id,
            "status": 1,
            "data_status": this.state.date,
        }
        UsuarioApi.updatePassageiro(dados)
        this.setState({ data: { status: 1 } })
        this.fetchData();
    }

    statusNegado() {
        const dados = {
            "id": this.state.data.id,
            "status": 2
        }
        UsuarioApi.updatePassageiro(dados)
        this.setState({ data: { status: 2 } })
        this.fetchData();
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {

        console.log(this.state.date)

        if (this.state.data.tipo !== 0) {
            return (
                <ScrollView style={{ flex: 1, backgroundColor: "#353535" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.text}>Confirme sua presença:</Text>
                        <TouchableOpacity style={{ marginLeft: "30%" }}>
                            <Ionicons name="md-refresh" size={30} color="lightgray" onPress={() => this.fetchData()} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 80, justifyContent: "center", flexDirection: "row", paddingTop: 20 }}>
                        <TouchableOpacity style={{ marginRight: "30%" }}>
                            <Ionicons name="md-checkmark" size={40} color="green" onPress={() => this.statusConfirmado()} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Ionicons name="md-close" size={40} color="red" onPress={() => this.statusNegado()} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.text}>Confirmados - </Text>
                    <FlatList
                        data={this.state.confirmados}
                        renderItem={({ item }) =>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => this.getDate()}>
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
                                    <Text style={styles.textA}>{item.nome + " - " + item.data_status}</Text>

                                </TouchableOpacity>
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
                                <Text style={styles.textA}>{item.nome}</Text>
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
                                <Text style={styles.textA}>{item.nome}</Text>
                            </View>
                        }
                    />
                </ScrollView>
            );
        }
        return (
            <ScrollView style={{ flex: 1, backgroundColor: "#353535" }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.text}>Confirmados - </Text>
                    <TouchableOpacity style={{ marginLeft: "60%" }}>
                        <Ionicons name="md-refresh" size={30} color="lightgray" onPress={() => this.fetchData()} />
                    </TouchableOpacity>
                </View>
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
                            <Text style={styles.textA}>{item.nome}</Text>
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
                            <Text style={styles.textA}>{item.nome}</Text>
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
                            <Text style={styles.textA}>{item.nome}</Text>
                        </View>
                    }
                />
            </ScrollView>
        )
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
        fontSize: 18,
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
