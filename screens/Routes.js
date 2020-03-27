import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';

const screens = {
    Home: {screen: HomeScreen},
    Map: {screen: MapScreen}
}

const Routes = createStackNavigator(screens);

export default createAppContainer(Routes);