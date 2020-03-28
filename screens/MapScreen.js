import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';


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
    //Pega as informaçoes do State para utilizar no initialRegion.
    const { latitude, longitude } = this.state

    if (latitude) {
      return (
        <View style={styles.mapView}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.0143,
              longitudeDelta: 0.0134
            }}
            showsUserLocation
            rotateEnabled={false}
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  map: {
    width: Dimensions.get('window').width,
    height: '90%',
    flex: 1
  },
  mapView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
