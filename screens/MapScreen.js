// Docs: https://reactnavigation.org/docs/en/drawer-navigator.html
// Ionicons: http://ionicons.com
// Brent Vatne: https://twitter.com/notbrent
// Eric Vicenti: https://twitter.com/EricVicenti
// Video Tutorial: https://www.youtube.com/watch?v=ZzhOjO-1dCs

import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from 'react-navigation-drawer';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';


class MapScreen extends React.Component {

  state = {
    latitude: null,
    longitude: null,
  };


  //Função para pegar a posição atual da pessoa e definir no State.
  async componentDidMount() {
    await navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        this.setState({ latitude, longitude }),
      error => console.log('Error:', error)
    );
  }
  static navigationOptions = {
    title: 'Mapa',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-home" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };


  render() {
    const { latitude, longitude } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          }}
          showsUserLocation
          rotateEnabled={false}
          showsMyLocationButton={true}
        />
      </View>
    );
  }
}

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-person" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.paragraph}
          onPress={() => {
            this.props.navigation.navigate('MapScreen');
          }}>
          Go back home
        </Text>
      </View>
    );
  }
}


class Logout extends React.Component {
  static navigationOptions = {
    title: 'Sair',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-log-out" size={24} color={focused ? 'blue' : 'black'} />
    ),

  };
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.paragraph}
          onPress={() => {
            this.props.navigation.navigate('LoginM');
          }}>
          Go back home
    </Text>
      </View >
    );
  }
}
const navigator = createDrawerNavigator(
  {
    MapScreen,
    Profile,
    Logout
  },
  {
    //drawerType: 'back',
    //drawerPosition: 'right',
    // drawerWidth: 200,
    // drawerBackgroundColor: 'orange',
    // contentComponent: CustomDrawerContentComponent
  }
);

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    height: 300,
  },
  map: {
    width: Dimensions.get('window').width,
    height: '90%',
    flex: 1,
    alignItems: "center"
  },
});
