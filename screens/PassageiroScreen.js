import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import MenuButton from "../components/Tabs/MenuButton";


export default class PassageiroScreen extends React.Component {

    constructor() {
        super();
        this.state = { TextInputDisableStatus: false }
    }

    onPressButtonEnabled = () => {
        this.setState({ TextInputDisableStatus: true })
    }

    onPressButtonDisabled = () => {
        this.setState({ TextInputDisableStatus: false })
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Ionicons
                        name="md-menu"
                        color="lightgray"
                        size={35}
                        style={styles.menuIcon}
                        onPress={() => this.props.navigation.toggleDrawer()}
                    />
                    <View style={{ height: 150, backgroundColor: '#252525', alignItems: "center", justifyContent: "center" }}>
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
                        placeholder={"Nome e Sobrenome"}
                        editable={this.state.TextInputDisableStatus}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={"Telefone"}
                        editable={this.state.TextInputDisableStatus}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={"Rua"}
                        editable={this.state.TextInputDisableStatus}
                    />
                    <View style={{ flexDirection: "row" }}>
                        <TextInput
                            style={styles.input1}
                            placeholder={"Bairro"}
                            editable={this.state.TextInputDisableStatus}
                        />
                        <TextInput
                            style={styles.input1}
                            placeholder={"Numero"}
                            editable={this.state.TextInputDisableStatus}
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
                </View>
            </SafeAreaView >
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