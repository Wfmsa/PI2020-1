import * as React from 'react';
import DrawerNavigator from './screens/Routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App(props) {
  return (
    <SafeAreaProvider>
      <DrawerNavigator />
    </SafeAreaProvider>
  );
}
