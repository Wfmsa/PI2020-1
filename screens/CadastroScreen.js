import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    AsyncStorage,
    Alert,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RadioButton } from 'react-native-paper';

const userInfo = { username: '', password: "" }

export default class HomeScreen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                nome:'',
                email: '',
                passwd: '',
            },
            accountOption: {
                checkedRadio: '',
            },
        }
    }
    async cadastrar() {
        console.log("Entrou  Função")
        if (this.state.accountOption.checkedRadio === "passageiro") {
            console.log("Entrou aqui Pass")
            const dados = {
                'nome': this.state.data.nome,
                'email': this.state.data.email,
                'passwd': this.state.data.passwd
            }
            UsuarioApi.insertPassageiro(dados)
            this.fetchData();
        }
        else if (this.state.accountOption.checkedRadio === "motorista") {
            console.log("Entrou aqui Motorista")
            const dados = {
                'nome': this.state.data.nome,
                'email': this.state.data.email,
                'passwd': this.state.data.passwd

            }
            UsuarioApi.insertMotorista(dados)
            this.fetchData();
        }
        else {
            Alert.alert("Cadastro", "Escolha o tipo conta!")
        }

    }
        render() {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                            <View style={styles.welcomeContainer}>
                                <Image
                                    source={require('../assets/images/van.png')}
                                    style={styles.welcomeImage}
                                />
                            </View>

                            <View style={{ marginBottom: "30%", }}>
                                <Text style={styles.text}>Usuario:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Digite seu usuario."
                                    onChangeText={(username) => this.setState({ username })}
                                    value={this.state.username}
                                    autoCapitalize="none"
                                />
                                <Text style={styles.text}>E-Mail:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Digite seu e-mail."
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}
                                    autoCapitalize="none"
                                />
                                <Text style={styles.text}>Senha:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Digite sua senha"
                                    secureTextEntry
                                    onChangeText={(password) => this.setState({ password })}
                                    value={this.state.passwd}
                                />



                                <View style={{
                                    alignItems: "flex-start",
                                    marginLeft: "5%",
                                    flexDirection: "row", paddingTop: 20
                                }}>
                                    <RadioButton
                                        value="motorista"
                                        color="lightgray"
                                        uncheckedColor="lightgray"
                                        status={this.state.accountOption.checkedRadio === 'motorista' ? 'checked' : 'unchecked'}
                                        onPress={() => { this.setState({ accountOption: { checkedRadio: 'motorista' } }); }}
                                    />
                                    <Text style={{ paddingTop: 8, color: "lightgray" }}>Motorista</Text>
                                    <RadioButton
                                        value="passageiro"
                                        color="lightgray"
                                        uncheckedColor="lightgray"
                                        status={this.state.accountOption.checkedRadio === 'passageiro' ? 'checked' : 'unchecked'}
                                        onPress={() => { this.setState({ accountOption: { checkedRadio: 'passageiro' } }); }}
                                    />
                                    <Text style={{ paddingTop: 8, color: "lightgray" }}>Passageiro</Text>
                                </View>

                                <View style={{ marginTop: "10%" }}>
                                    <TouchableOpacity
                                        style={styles.btn}
                                        onPress={()=> this.cadastrar()}>   
                                        <Text style={{ color: "lightgray" }}>Cadastrar</Text>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: "row", justifyContent: "center", paddingTop: "1%" }}>
                                        <Text style={{ color: "lightgray" }}>Já possui uma conta? </Text>
                                        <TouchableOpacity>
                                            <Text style={{ color: "lightblue" }}
                                                onPress={() => {
                                                    this.props.navigation.navigate('Login')
                                                }}>
                                                Faça o login aqui</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </View>
            );
        
    }
/*
        _cadastrar = async () => {
            if (this.state.accountOption.checkedRadio === 'motorista') {
                if (userInfo.username === this.state.username && userInfo.password === this.state.password) {
                    await AsyncStorage.setItem('isLoggedIn', '1');
                    this.props.navigation.navigate('Map');
                } else {
                    alert('Usuario ou senha incorreta!');
                }
            } else if (this.state.accountOption.checkedRadio === 'passageiro') {
                if (userInfo.username === this.state.username && userInfo.password === this.state.password) {
                    await AsyncStorage.setItem('isLoggedIn', '2');
                    this.props.navigation.navigate('Map');
                } else {
                    alert('Usuario ou senha incorreta!');
                }
            } else {
                Alert.alert('Erro ao cadastrar!', 'Preencha todos os campos!')
            }
        }*/
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#353535',
        },
        contentContainer: {
            height: '100%',
            justifyContent: 'space-between',
        },
        btnNavegar: {
            margin: 40
        },
        welcomeContainer: {
            alignItems: 'center',
            marginTop: '5%',
            paddingLeft: 10
        },
        welcomeImage: {
            width: 120,
            height: 100,
            resizeMode: 'contain',
        },

        iconM: {
            height: 50,
            width: "40%",
            borderWidth: 1,
            borderRadius: 30 / 2,
            borderColor: "lightgray",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "15%",
        },
        iconP: {
            height: 50,
            width: "40%",
            borderWidth: 1,
            borderRadius: 30 / 2,
            borderColor: "lightgray",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "3%",
        },
        viewBotoesLogin: {
            marginTop: "10%",
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: "90%",
            justifyContent: "center"
        },


        input: {
            height: 50,
            width: "90%",
            borderWidth: 1,
            borderRadius: 30 / 2,
            borderColor: "lightgray",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "5%",
            paddingLeft: 10,
        },
        text: {
            paddingTop: 10,
            marginLeft: "5%",
            fontSize: 15,
            color: "lightgray",
            paddingBottom: 8,
            fontWeight: "bold",
        },
        btn: {

            height: 50,
            width: "90%",
            borderWidth: 1,
            borderRadius: 30 / 2,
            borderColor: "lightgray",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "5%",
        },
    });
