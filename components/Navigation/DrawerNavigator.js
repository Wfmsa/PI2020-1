import React from 'react';
import { Dimensions, View, TouchableOpacity, SafeAreaView, ScrollView, Text, Alert } from "react-native";
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from '../../screens/HomeScreen';
import MapScreen from '../../screens/MapScreen';
import LoginMotoristaScreen from '../../screens/LoginMotoristaScreen';
import LoginPassageiro from '../../screens/LoginPassageiro';
import CadastroMotoristaScreen from '../../screens/CadastroMotoristaScreen';
import CadastroPassageiroScreen from '../../screens/CadastroPassageiroScreen';


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
                                props.navigation.navigate('LoginM')
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
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                drawerLabel: 'Inicio',
                drawerIcon: ({ focused }) => (
                    <Ionicons name="md-home" size={24} color={focused ? 'orange' : 'black'} />
                ),
                // drawerLockMode: 'locked-closed'
            }
        },
        Map: {
            screen: MapScreen,
            navigationOptions: {
                drawerLabel: 'Mapa',
                drawerIcon: ({ focused }) => (
                    <Ionicons name="md-map" size={24} color={focused ? 'orange' : 'black'} />
                ),
                drawerLockMode: 'locked-closed'
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
        LoginM: {
            screen: LoginMotoristaScreen,
            navigationOptions: {
                drawerLabel: <Hidden />,
                drawerLockMode: 'locked-closed'
            },
        },
        LoginP: {
            screen: LoginPassageiro,
            navigationOptions: {
                drawerLabel: <Hidden />,
                drawerLockMode: 'locked-closed'
            },
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

export default createAppContainer(DrawerNavigator);