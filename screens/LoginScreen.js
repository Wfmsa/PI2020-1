import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  CheckBox,
  AsyncStorage,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import * as UsuarioApi from '../utils/apis/UsuariosAPI';
import * as UsuarioRepositorio from '../repositorios/UsuarioRepositorio';


export default class HomeScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      passwd: '',
      accountOption: {
        checkedRadio: '',
      },
      rememberMe: {
        checked: ''
      },
    }
  }
  render() {

    return (
      <View style={styles.container} >
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/van.png')}
            style={styles.welcomeImage}
          />
        </View>

        <KeyboardAvoidingView style={{ marginBottom: "30%", }}>
          <Text style={styles.text}>Usuário:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome de usuário."
            onChangeText={(nome) => this.setState({ nome })}
            value={this.state.nome}
            autoCapitalize="none"
          />
          <Text style={styles.text}>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry
            onChangeText={(passwd) => this.setState({ passwd })}
            value={this.state.passwd}
          />

          <View style={{
            flexDirection: "row"
          }}>
            <CheckBox
              value={this.state.checked}
              uncheckedColor={"ligthgray"}
              onValueChange={() => this.setState({ checked: !this.state.checked })}
              style={{ marginLeft: "5%", margintTop: "5%", position: "relative", }}
            />

            <Text style={{ color: "lightgray", paddingTop: 6 }}>Lembrar-me!</Text>

            <TouchableOpacity style={{
              marginLeft: "22%",
              paddingTop: 6,
            }}>
              <Text style={{ color: "lightgray", }}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

          </View>

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
              onPress={() => this.validaLogin()}>
              <Text style={{ color: "lightgray" }}>Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "center", paddingTop: "1%" }}>
              <Text style={{ color: "lightgray" }}>Não possui uma conta? </Text>
              <TouchableOpacity>
                <Text style={{ color: "lightblue" }}
                  onPress={() => { this.props.navigation.navigate('Cadastro') }}>
                  Cadastre-se aqui</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView >
      </View>
    );
  }

  async validaLogin() {
    if (this.state.accountOption.checkedRadio === "motorista") {
      const { nome, passwd } = this.state;
      const userInfo = { nome, passwd };
      const dadosUsuario = await UsuarioApi.loginMotorista(userInfo);

      if (dadosUsuario) {
        UsuarioRepositorio.limpar();
        UsuarioRepositorio.salvar(dadosUsuario);
        this.props.navigation.navigate('Map');
      } else {
        await AsyncStorage.setItem('isLoggedIn', '1');
        Alert.alert("Login", "Email, senha ou tipo de conta incorreto!")
      }

    } else if (this.state.accountOption.checkedRadio === "passageiro") {

      const { nome, passwd } = this.state;
      const userInfo = { nome, passwd };
      const dadosUsuario = await UsuarioApi.loginPassageiro(userInfo);

      if (dadosUsuario) {
        UsuarioRepositorio.limpar();
        UsuarioRepositorio.salvar(dadosUsuario);
        console.log(JSON.stringify(dadosUsuario,undefined,2))
        this.props.navigation.navigate('Map');
      } else {
        await AsyncStorage.setItem('isLoggedIn', '1');
        Alert.alert("Login", "Email ou senha incorreta!")
      }

    } else {
      Alert.alert("Login", "Escolha o tipo conta!")
    }
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
    justifyContent: 'center'
  },
  contentContainer: {
    height: '100%',
    justifyContent: 'space-between',
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
    color: "lightgray",
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
