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

const userInfo = { email: '', password: "" }

export default class HomeScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        email: '',
        password: '',
      },
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
        <ScrollView style={styles.container} >
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/van.png')}
              style={styles.welcomeImage}
            />
            <Text style={{ alignItems: "center", color: "lightgray", paddingTop: "10%", fontWeight: "bold" }}>Login com:</Text>
            <View style={styles.viewBotoesLogin}>
              <TouchableOpacity
                style={styles.iconM}
                activeOpacity={0.5}
              >
                <Ionicons name="logo-facebook" color="blue" size={30} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.iconP}
                activeOpacity={0.5}
              >
                <Ionicons name="logo-google" color="orange" size={30} />
              </TouchableOpacity>
            </View>
            <Text style={{ alignItems: "center", color: "lightgray", paddingTop: "12%", fontWeight: "bold" }}>Ou:</Text>
          </View>

          <KeyboardAvoidingView style={{ marginBottom: "30%", }}>
            <Text style={styles.text}>E-Mail:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail."
              onChangeText={(email) => this.setState({ userInfo: { email } })}
              value={this.state.email}
              autoCapitalize="none"
            />
            <Text style={styles.text}>Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              secureTextEntry
              onChangeText={(password) => this.setState({ userInfo: { password } })}
              value={this.state.password}
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
                onPress={this._login}>
                <Text style={{ color: "lightgray" }}>Login</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: "row", justifyContent: "center", paddingTop: "1%" }}>
                <Text style={{ color: "lightgray" }}>Não possui uma conta? </Text>
                <TouchableOpacity>
                  <Text style={{ color: "lightblue" }}
                    onPress={() => {
                      if (checkedRadio === "motorista") {
                        this.props.navigation.navigate('Cadastro')
                      } else if (checkedRadio === "passageiro") {
                        this.props.navigation.navigate('Cadastro')
                      } else {
                        Alert.alert("Error", "Selecione o tipo da conta!")
                      }
                    }}>
                    Cadastre-se aqui</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView >
        </ScrollView>
    );
  }

  _login = async () => {
    if (this.state.accountOption.checkedRadio === "motorista") {
      if (userInfo.email === this.state.userInfo.email && userInfo.password === this.state.userInfo.password) {
        await AsyncStorage.setItem('isLoggedIn', '1');
        await AsyncStorage.setItem('Tipo', 'M');
        this.props.navigation.navigate('MapM');
      } else {
        Alert.alert("Login", "Email ou senha incorreta!")
      }
    } else if (this.state.accountOption.checkedRadio === "passageiro") {
      if (userInfo.email === this.state.userInfo.email && userInfo.password === this.state.userInfo.password) {
        await AsyncStorage.setItem('isLoggedIn', '1');
        await AsyncStorage.setItem('Tipo', 'P');

        this.props.navigation.navigate('MapP');
      } else {
        Alert.alert("Login", "Email ou senha incorreta!")
      }
    } else {
      Alert.alert("Login", "Escolha o tipo da conta!")
    }
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
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
