import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {
    TextInput,
    ScrollView
} from 'react-native-gesture-handler';


export default class CadastroPassageiroScreen extends Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/passageiro.png')}
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
                        E-mail:
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu e-mail."
                    />
                    <Text style={styles.text}>
                        Repita o e-mail:
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu e-mail novamente."
                    />
                    <Text style={styles.text}>
                        Escolha um senha:
                     </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        secureTextEntry
                    />
                    <Text style={styles.text}>
                        Repita sua senha:
                     </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Repita sua senha"
                        secureTextEntry
                    />
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('Map')}>
                        <Text>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    formLogin: {
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
        width: 100,
        height: 87.5,
        resizeMode: 'contain',
        marginTop: 3,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 160
    },
    text: {
        padding: 10,
        fontSize: 20,
        marginLeft: '5%',
        alignSelf: 'flex-start'
    },
    btn: {
        padding: 10,
        alignItems: "center",
        marginTop: '10%',
        marginBottom: 40,
        width: '70%',
        marginLeft: '15%',
        borderStartWidth: 1,
        borderEndWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRadius: 25

    }

});
