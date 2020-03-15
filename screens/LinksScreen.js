import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function LinksScreen() {

  const region = navigator.geolocation.getCurrentPosition(
    ({ coords: {latitude, longitude} }) => {
      return {
        latitude,
        longitude,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134
      }
    }
  )

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.mapStyle}
        region={region}
        showsUserLocation
        loadingEnabled  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});