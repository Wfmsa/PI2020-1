import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    SafeAreaView, ScrollView,
    Text,
    Alert,
    Image,
    AsyncStorage,
    ActivityIndicator,
    StatusBar,
    StyleSheet
} from "react-native";
import { createDrawerNavigator, DrawerItems, DrawerActions } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './LoginScreen';
import MapScreen from './MapScreen';
import CadastroScreen from './CadastroScreen';
import RotasScreen from './RotasScreen';
import PassageiroScreen from './PassageiroScreen';
import MapScreenMotorista from './MapScreenMotorista';
import RightDrawerTab from '../components/Tabs/RightDrawerTab';



class Hidden extends React.Component {
    render() {
        return null;
    }
}

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#353535" }}>
        <View style={{ height: 150, backgroundColor: '#252525', alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity onPress={() => props.navigation.navigate('ProfileP')}>
                <Ionicons name="md-contact" size={80} color="lightgray" />
                <Text style={{ color: "lightgray", fontWeight: "bold", alignSelf: "center" }}>Nome</Text>
            </TouchableOpacity>
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
                                props.navigation.navigate('Login')
                            }
                        },
                    ],
                    { cancelable: false }
                )
            }>
                <Ionicons name="md-log-out" size={24} style={{ paddingTop: 5, marginLeft: 19 }} color="lightgray" />
                <Text style={{ color: "lightgray", paddingTop: 7, marginLeft: 34, fontWeight: 'bold', }}>Sair</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
)

const RightCustomDrawerComponent = () => (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#353535" }}>               
            <RightDrawerTab />    
    </SafeAreaView>
)

const LeftDrawer = createDrawerNavigator(
    {
        MapP: {
            screen: MapScreen,
            navigationOptions: {
                drawerLabel: 'Mapa',
                drawerIcon: ({ focused }) => (
                    <Ionicons name="md-map" size={24} color={focused ? 'orange' : 'white'} />
                ),

            },
        },
        MapM: {
            screen: MapScreenMotorista,
            navigationOptions: {
                drawerLabel: 'Mapa Motorista',
                drawerIcon: ({ focused }) => (
                    <Ionicons name="md-map" size={24} color={focused ? 'orange' : 'white'} />
                ),

            },
        },
        Rotas: {
            screen: RotasScreen,
            navigationOptions: {
                drawerLabel: 'Rotas',
                drawerIcon: ({ focused }) => (
                    <Ionicons name="md-pin" size={24} color={focused ? 'orange' : 'white'} />
                ),
            }
        },
        Settings: {
            screen: RotasScreen,
            navigationOptions: {
                drawerLabel: 'Configurações',
                drawerIcon: ({ focused }) => (
                    <Ionicons name="md-settings" size={24} color={focused ? 'orange' : 'white'} />
                ),
            }
        },
        ProfileP: {
            screen: PassageiroScreen,
            navigationOptions: {
                drawerLabel: <Hidden />
            }
        }
    },
    {
        contentOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: 'lightgray',
        },
        contentComponent: CustomDrawerComponent,
        getCustomActionCreators: (route, stateKey) => {
            return {
                toggleLeftDrawer: () => DrawerActions.toggleDrawer({ key: stateKey }),
            };
        },
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
        contentComponent: RightCustomDrawerComponent,
        getCustomActionCreators: (route, stateKey) => {
            return {
                toggleRightDrawer: () => DrawerActions.toggleDrawer({ key: stateKey }),
            };
        },
    }
);

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    Cadastro: {
        screen: CadastroScreen,
        navigationOptions: {
            title: 'Cadastro',
            headerShown: false
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

    _loadTipo = async () => {
        const tipo = await AsyncStorage.getItem('Tipo')
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
