import React, { Component } from 'react';
import { Dimensions, View, TouchableOpacity, SafeAreaView, ScrollView, Text, Alert, AsyncStorage } from "react-native";
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { ActivityIndicator, StatusBar } from 'react-native';


import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';
import LoginMotoristaScreen from './LoginMotoristaScreen';
import LoginPassageiro from './LoginPassageiro';
import CadastroMotoristaScreen from './CadastroMotoristaScreen';
import CadastroPassageiroScreen from './CadastroPassageiroScreen';
import { createStackNavigator } from 'react-navigation-stack';


class Hidden extends React.Component {
    render() {
        return null;
    }
}

const WIDTH = Dimensions.get('window').width;

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 150, backgroundColor: '#303030', alignItems: "center", justifyContent: "center" }}>
            <Ionicons name="md-person" size={80} color="white" />
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

const DrawerNavigator = createDrawerNavigator(
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
        Settings: {
            screen: HomeScreen,
            navigationOptions: {
                drawerLabel: 'Configurações',
                drawerIcon: ({ focused }) => (
                    <Ionicons name="md-settings" size={24} color={focused ? 'orange' : 'black'} />
                ),
            }
        },
        CadastroMotorista: {
            screen: CadastroMotoristaScreen,
            navigationOptions: {
                drawerLabel: <Hidden />,
                drawerLockMode: 'locked-closed'
            },
        },
        CadastroPassageiro: {
            screen: CadastroPassageiroScreen,
            navigationOptions: {
                drawerLabel: <Hidden />,
                drawerLockMode: 'locked-closed'
            },
        },
    },
    {
        contentOptions: {
            activeTintColor: 'orange'
        },
        contentComponent: CustomDrawerComponent,
    }
);

const LeftDrawer = createDrawerNavigator(
    {
        LeftDrawer: {
            screen: DrawerNavigator,
            navigationOptions: {
                drawerLabel: <Hidden />,
                drawerLockMode: 'locked-closed'
            }
        }
    },
    {
        drawerPosition: 'left',
        contentComponent: CustomDrawerComponent
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
})

class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._loadData();
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
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

export default createAppContainer(createStackNavigator(
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