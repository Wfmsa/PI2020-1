import * as React from 'react';

import DrawerNavigator from './components/Navigation/DrawerNavigator';
import { StyleSheet,} from 'react-native';

export default function App(props) {
  return (
    <DrawerNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: "center",
    backgroundColor: '#ecf0f1',
  },  
});