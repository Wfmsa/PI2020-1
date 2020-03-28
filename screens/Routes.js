import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';
import LoginMotoristaScreen from './LoginMotoristaScreen';
import LoginPassageiro from './LoginPassageiro';

const screens = {
    Home: {screen: HomeScreen},
    Map: {screen: MapScreen},
    LoginM: {screen: LoginMotoristaScreen},
    LoginP: {screen: LoginPassageiro},
}

const Routes = createStackNavigator(screens);

export default createAppContainer(Routes);