import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as UsuarioApi from '../utils/apis/UsuariosAPI';
import * as UsuarioRepositorio from '../repositorios/UsuarioRepositorio';

export default class PassageiroScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            TextInputDisableStatus: false,
            data: '',
        }
    }

    onPressButtonEnabled = () => {
        this.setState({ TextInputDisableStatus: true })
    }

    onPressButtonDisabled = () => {
        this.setState({ TextInputDisableStatus: false })
        this.atualizarDados();
        this.fetchData();
    }

    async fetchData() {
        const dados = await UsuarioRepositorio.buscarTodos()
        this.setState({ data: dados[0] })
    }

    componentDidMount() {
        this.fetchData();
    }

    async atualizarDados() {
        if (this.state.data.tipo !== 0) {
            console.log (this.state.data.tipo)
            console.log ("sou passageiro")
            const dados = {
                "id": this.state.data.id,
                "nome": this.state.name,
                "telefone": this.state.tel,
                "endereco_rua": this.state.end_rua,
                "endereco_bairro": this.state.end_bairro,
                "endereco_num": this.state.end_num
            }
            UsuarioApi.updateDadosPassageiro(dados)
        } else {
            console.log (this.state.data.tipo)
            console.log ("sou motorista")
            const dados = {
                "id": this.state.data.id,
                "nome": this.state.name,
                "telefone": this.state.tel,
                "endereco_rua": this.state.end_rua,
                "endereco_bairro": this.state.end_bairro,
                "endereco_num": this.state.end_num
            }
            UsuarioApi.updateDadosMotorista(dados)
        }
    }

    render() {
        console.log(this.state.data)
        if (this.state.data.tipo !== 0) {
            return (
                <View style={styles.container}>
                    <View style={{ height: 150, backgroundColor: '#252525', alignItems: "center", justifyContent: "center" }}>
                        <Ionicons
                            name="md-menu"
                            color="lightgray"
                            size={35}
                            style={styles.menuIcon}
                            onPress={() => this.props.navigation.toggleDrawer()}
                        />

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("PassageiroScreen") }}>
                            <Ionicons name="md-contact" size={80} color="lightgray" />
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder={"Codigo da Van"}
                        editable={this.state.TextInputDisableStatus}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={this.state.data.nome}
                        editable={this.state.TextInputDisableStatus}
                        onChangeText={(name) => this.setState({ name })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={this.state.data && (this.state.data.telefone).toString()}
                        editable={this.state.TextInputDisableStatus}
                        onChangeText={(tel) => this.setState({ tel })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={this.state.data.endereco_rua}
                        editable={this.state.TextInputDisableStatus}
                        onChangeText={(end_rua) => this.setState({ end_rua })}
                    />
                    <View style={{ flexDirection: "row" }}>
                        <TextInput
                            style={styles.input1}
                            placeholder={this.state.data.endereco_bairro}
                            editable={this.state.TextInputDisableStatus}
                            onChangeText={(end_bairro) => this.setState({ end_bairro })}
                        />
                        <TextInput
                            style={styles.input1}
                            placeholder={this.state.data && (this.state.data.endereco_num).toString()}
                            editable={this.state.TextInputDisableStatus}
                            onChangeText={(end_num) => this.setState({ end_num })}
                        />
                    </View>

                    <View style={{ alignSelf: "center", flexDirection: "row", }}>
                        <TouchableOpacity style={styles.btns} onPress={this.onPressButtonDisabled}>
                            <Text style={{ color: "lightgray", marginLeft: "5%" }}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btns} onPress={this.onPressButtonEnabled}>
                            <Text style={{ color: "lightgray", marginLeft: "5%" }}>Editar</Text>
                        </TouchableOpacity>
                    </View>

                </View >
            )
        }
        return (
            <View style={styles.container}>
                <View style={{ height: 150, backgroundColor: '#252525', alignItems: "center", justifyContent: "center" }}>
                    <Ionicons
                        name="md-menu"
                        color="lightgray"
                        size={35}
                        style={styles.menuIcon}
                        onPress={() => this.props.navigation.toggleDrawer()}
                    />

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("PassageiroScreen") }}>
                        <Ionicons name="md-contact" size={80} color="lightgray" />
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder={this.state.data.nome}
                    editable={this.state.TextInputDisableStatus}
                    onChangeText={(name) => this.setState({ name })}
                />
                <TextInput
                    style={styles.input}
                    placeholder={this.state.data && (this.state.data.telefone).toString()}
                    editable={this.state.TextInputDisableStatus}
                    onChangeText={(tel) => this.setState({ tel })}
                />
                <TextInput
                    style={styles.input}
                    placeholder={this.state.data.endereco_rua}
                    editable={this.state.TextInputDisableStatus}
                    onChangeText={(end_rua) => this.setState({ end_rua })}
                />
                <View style={{ flexDirection: "row" }}>
                    <TextInput
                        style={styles.input1}
                        placeholder={this.state.data.endereco_bairro}
                        editable={this.state.TextInputDisableStatus}
                        onChangeText={(end_bairro) => this.setState({ end_bairro })}
                    />
                    <TextInput
                        style={styles.input1}
                        placeholder={this.state.data && (this.state.data.endereco_num).toString()}
                        editable={this.state.TextInputDisableStatus}
                        onChangeText={(end_num) => this.setState({ end_num })}
                    />
                </View>

                <View style={{ alignSelf: "center", flexDirection: "row", }}>
                    <TouchableOpacity style={styles.btns} onPress={this.onPressButtonDisabled}>
                        <Text style={{ color: "lightgray", marginLeft: "5%" }}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btns} onPress={this.onPressButtonEnabled}>
                        <Text style={{ color: "lightgray", marginLeft: "5%" }}>Editar</Text>
                    </TouchableOpacity>
                </View>

            </View >
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#353535",
    },
    input: {
        height: 50,
        marginTop: "5%",
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#252525",
        borderRadius: 15,
        paddingLeft: 5,
        color: "lightgray"
    },
    input1: {
        height: 40,
        marginTop: "5%",
        width: "40%",
        alignSelf: "center",
        backgroundColor: "#252525",
        borderRadius: 15,
        paddingLeft: 5,
        marginLeft: "5%",
        color: "lightgray"
    },
    btns: {
        height: 20,
        backgroundColor: "#252525",
        borderRadius: 15,
        alignItems: "center",
        marginRight: "5%",
        marginLeft: "5%",
        marginTop: "10%",
    },
    menuIcon: {
        zIndex: 9,
        position: "absolute",
        top: "1%",
        right: "85%",
        paddingLeft: 10,
        paddingRight: 10,
    }
})