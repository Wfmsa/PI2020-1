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
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NavigatorTab from '../components/Tabs/NavigatorTab';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';

const userInfo = { username: 'Admin', password: "123" }

export default class HomeScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  state = {
    checkedRadio: 'first',
  };

  render() {
    const { checkedRadio } = this.state;

    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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

            <View style={{ marginBottom: "30%", }}>
              <Text style={styles.text}>E-Mail:</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail."
                onChangeText={(username) => this.setState({ username })}
                value={this.state.username}
                autoCapitalize="none"
              />
              <Text style={styles.text}>Senha:</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry
                onChangeText={(password) => this.setState({ password })}
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
                  value="first"
                  color="lightgray"
                  uncheckedColor="lightgray"
                  status={checkedRadio === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checkedRadio: 'first' }); }}
                />
                <Text style={{ paddingTop: 8, color: "lightgray" }}>Motorista</Text>
                <RadioButton
                  value="second"
                  color="lightgray"
                  uncheckedColor="lightgray"
                  status={checkedRadio === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checkedRadio: 'second' }); }}
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
                        if (checkedRadio === "first") {
                          this.props.navigation.navigate('CadastroMotorista')
                        } else if (checkedRadio === "second") {
                          this.props.navigation.navigate('CadastroPassageiro')
                        } else {
                          Alert.alert("Error", "Selecione o tipo da conta!")
                        }
                      }}>
                      Cadastre-se aqui</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }

  _login = async () => {
    if (userInfo.username === this.state.username && userInfo.password === this.state.password) {
      await AsyncStorage.setItem('isLoggedIn', '1');
      this.props.navigation.navigate('Map');
    } else {
      alert('Usuario ou senha incorreta!');
    }
  }
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
