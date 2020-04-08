import * as React from 'react';
import MapView from 'react-native-maps';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  SafeAreaView
} from 'react-native';
import MenuButton from '../components/Tabs/MenuButton';
import MoreButton from '../components/Tabs/MoreButton';


export default class MapScreen extends React.Component {

  state = {
    latitude: null,
    longitude: null,
  }

  //Função para pegar a posição atual da pessoa e definir no State.
  async componentDidMount() {

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude }),
      (error) => console.log('Error:', error)
    )

  }


  render() {
    if (this.state.latitude) {
      return (
        <View style={styles.container}>
          <SafeAreaView style={{ flex: 1 }}>
            <MenuButton onPress={() => this.props.navigation.toggleDrawer()} />
            <MoreButton onPress={() => this.props.navigation.toggleDrawer()} />
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134,
              }}
              showsUserLocation
              rotateEnabled={false}
            />
            <View style={styles.mapDrawerOverlay} />
            <View style={styles.mapDrawerOverlayRight} />
          </SafeAreaView>
        </View >
      );
    }
    return (
      <View style={styles.icon}>
        <Image
          source={require('../assets/images/van.png')}
          style={styles.image}
        />
      </View>
    )

  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  image: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get('window').height,
  },
  mapView: {
    flex: 1,
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#303030"
  },
  mapDrawerOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.0,
    height: Dimensions.get('window').height,
    width: 20,
  },
  mapDrawerOverlayRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    opacity: 0.0,
    height: Dimensions.get('window').height,
    width: 20,
  },
})
