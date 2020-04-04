import React from 'react';
import { Plataform, Dimensions, View, Image, SafeAreaView, ScrollView } from "react-native";
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
        <View style={{ height: 150, backgroundColo: 'white', alignItems: "center", justifyContent: "center" }}>
            <Image source={require("../../assets/images/passageiro.png")} style={{ height: 80, width: 80, borderRadius: 80 }}></Image>
        </View>
        <ScrollView>
            <DrawerItems {...props} />
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
                drawerLockMode: 'locked-closed'
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