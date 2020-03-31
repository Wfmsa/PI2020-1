import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default class HomeScreen extends Component {

    render() {
        return (
            <View>

                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/van.png')}
                        style={styles.image}
                    />
                </View>

                <View style={styles.formLogin}>
                    <Text style={styles.text}>
                        Usuário:
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu usuario."
                    />
                    <Text style={styles.text}>
                        Senha:
                     </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        secureTextEntry
                    />
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('Map')}>
                        <Text>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.txtRealizarCadastro} onPress={() => this.props.navigation.navigate('CadastroMotorista')}>Realizar cadastro</Text>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    formLogin: {
        marginTop: '15%',
        alignItems: "center",
    },
    input: {
        width: '90%',
        padding: 15,
        borderStartWidth: 1,
        borderEndWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRadius: 25
    },
    image: {
        width: 160,
        height: 140,
        resizeMode: 'contain',
        marginTop: 3,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: '25%'
    },
    text: {
        marginRight: '70%',
        padding: 10,
        fontSize: 20
    },
    btn: {
        padding: 10,
        alignItems: "center",
        marginTop: '10%',
        width: '70%',
        marginLeft: '15%',
        borderStartWidth: 1,
        borderEndWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRadius: 25
    },
    txtRealizarCadastro: {
        color: 'black',
        textAlign: 'center',
        marginTop: 30
    },
});
