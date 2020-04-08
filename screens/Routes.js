import React, { Component } from 'react';
import {
    Dimensions,
    View,
    TouchableOpacity,
    SafeAreaView, ScrollView,
    Text,
    Alert,
    Image,
    AsyncStorage,
    ActivityIndicator,
    StatusBar
} from "react-native";
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';
import LoginMotoristaScreen from './LoginMotoristaScreen';
import LoginPassageiro from './LoginPassageiro';
import CadastroMotoristaScreen from './CadastroMotoristaScreen';
import CadastroPassageiroScreen from './CadastroPassageiroScreen';
import RotasScreen from './RotasScreen';



class Hidden extends React.Component {
    render() {
        return null;
    }
}

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 150, backgroundColor: 'silver', alignItems: "center", justifyContent: "center" }}>
            <Ionicons name="md-contact" size={80} color="black" />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() =>
                Alert.alert(
                    'Sair',
                    'Você deseja sair da sua conta?',
                    [
                        { text: 'Cancelar', onPress: () => { return null } },
                        {
                            text: 'Confirmar', onPress: () => {
                                AsyncStorage.clear();
                                props.navigation.navigate('Home')
                            }
                        },
                    ],
                    { cancelable: false }
                )
            }>
                <Ionicons name="md-log-out" size={24} style={{ paddingTop: 5, marginLeft: 19 }} />
                <Text style={{ paddingTop: 7, marginLeft: 34, fontWeight: 'bold', }}>Sair</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
)

const LeftDrawer = createDrawerNavigator(
    {
        Map: {
            screen: MapScreen,
            navigationOptions: {
                drawerLabel: 'Mapa',
                drawerIcon: ({ focused }) => (
                    <Ionicons name="md-map" size={24} color={focused ? 'orange' : 'black'} />
                ),
            }
        },
        Rotas: {
            screen: RotasScreen,
            navigationOptions: {
                drawerLabel: 'Rotas',
                drawerIcon: ({ focused }) => (
                    <Ionicons name="md-pin" size={24} color={focused ? 'orange' : 'black'} />
                ),
            }
        },
        Settings: {
            screen: RotasScreen,
            navigationOptions: {
                drawerLabel: 'Configurações',
                drawerIcon: ({ focused }) => (
                    <Ionicons name="md-settings" size={24} color={focused ? 'orange' : 'black'} />
                ),
            }
        },
    },
    {
        contentOptions: {
            activeTintColor: 'orange'
        },
        contentComponent: CustomDrawerComponent,
    }
);

const RightDrawer = createDrawerNavigator(
    {
        Drawer: {
            screen: LeftDrawer,
            navigationOptions: {
                drawerLabel: <Hidden />,
            }
        }
    },
    {
        drawerPosition: 'right',
    }
);

const AuthStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    LoginM: {
        screen: LoginMotoristaScreen,
        navigationOptions: {
            title: 'Login Motorista'
        },
    },
    LoginP: {
        screen: LoginPassageiro,
        navigationOptions: {
            title: 'Login Passageiro'
        },
    },
    CadastroMotorista: {
        screen: CadastroMotoristaScreen,
        navigationOptions: {
            title: 'Cadastro Motorista'
        },
    },
    CadastroPassageiro: {
        screen: CadastroPassageiroScreen,
        navigationOptions: {
            title: 'Cadastro Passageiro'
        },
    },
})

class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._loadData();
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image
                    source={require('../assets/images/van.png')}
                    style={{
                        width: 100,
                        height: 80,
                        resizeMode: 'contain',
                        marginTop: 3,
                        marginLeft: -10,
                    }}
                />
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }

    _loadData = async () => {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        this.props.navigation.navigate(!isLoggedIn !== '1' ? 'Auth' : 'App')
    }
    
}

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,

        App: {
            screen: RightDrawer,
            navigationOptions: {
                headerShown: false
            }
        },
        Auth: {
            screen: AuthStack,
            navigationOptions: {
                drawerLockMode: 'locked-closed',
                headerShown: false
            }
        },
    },
    {
        initialRouteName: 'AuthLoading'
    }
));