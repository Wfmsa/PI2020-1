import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';
import LoginMotoristaScreen from './LoginMotoristaScreen';
import LoginPassageiro from './LoginPassageiro';
import CadastroMotoristaScreen from './CadastroMotoristaScreen';
import CadastroPassageiroScreen from './CadastroPassageiroScreen';


const screens = {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home',
            headerShown: false
        },
    },
    Map: {
        screen: MapScreen,
        navigationOptions: {
            title: 'Mapa',
            headerShown: false
        },
    },
    LoginM: {
        screen: LoginMotoristaScreen,
        navigationOptions: {
            title: 'Login Motorista',
            headerShown: true
        },
    },
    LoginP: {
        screen: LoginPassageiro,
        navigationOptions: {
            title: 'Login Passageiro',
            headerShown: true
        },
    },
    CadastroMotorista: {
        screen: CadastroMotoristaScreen,
        navigationOptions: {
            title: 'Cadastro Motorista',
            headerShown: true
        },
    },
    CadastroPassageiro: {
        screen: CadastroPassageiroScreen,
        navigationOptions: {
            title: 'Cadastro Passageiro',
            headerShown: true
        },
    },       
}

const Routes = createStackNavigator(screens);

export default createAppContainer(Routes);