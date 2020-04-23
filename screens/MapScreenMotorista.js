import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  SafeAreaView,
  Text,
} from 'react-native';
import MenuButton from '../components/Tabs/MenuButton';
import MoreButton from '../components/Tabs/MoreButton';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


export default class MapScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: null,
        longitude: null,
        latitudeDelta: 0.1,
        longitudeDelta: 0,
      }
    }
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          }
        });
      },
      (error) => {
        console.warn(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    )
  }

  onRegionChange(region) {
    this.setState({
      region: region
    });
  }

  render() {


    if (this.state.region.latitude) {
      return (
        <SafeAreaView style={styles.container}>
          <MenuButton onPress={() => this.props.navigation.toggleLeftDrawer()} />
          <MoreButton onPress={() => this.props.navigation.toggleRightDrawer()} />
          <MapView
            style={styles.map}
            region={this.state.region}
            showsUserLocation={true}
            onRegionChangeCompletee={region => {
              this.setState({ region });
            }}
            rotateEnabled={false}
          />

          <ScrollView style={{ flex: 1 }}>
            <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: "bold" }}>Selecione uma rota</Text>
            <TouchableOpacity style={styles.rotas}>
              <Ionicons name="md-pin" size={25} style={styles.iconRotas} />
              <Text style={styles.text}>Rota 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rotas}>
              <Ionicons name="md-pin" size={25} style={styles.iconRotas} />
              <Text style={styles.text}>Rota 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rotas}>
              <Ionicons name="md-pin" size={25} style={styles.iconRotas} />
              <Text style={styles.text}>Rota 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rotas}>
              <Ionicons name="md-pin" size={25} style={styles.iconRotas} />
              <Text style={styles.text}>Rota 4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rotas}>
              <Ionicons name="md-pin" size={25} style={styles.iconRotas} />
              <Text style={styles.text}>Rota 5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rotas}>
              <Ionicons name="md-pin" size={25} style={styles.iconRotas} />
              <Text style={styles.text}>Rota 6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rotas}>
              <Ionicons name="md-pin" size={25} style={styles.iconRotas} />
              <Text style={styles.text}>Rota 7</Text>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.mapDrawerOverlay} />
          <View style={styles.mapDrawerOverlayRight} />
        </SafeAreaView>
      );
    }
    return (
      <View style={styles.icon} >
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
    backgroundColor: "#fff"
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
    height: "80%",
  },
  mapView: {
    flex: 1,
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#303030"
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10
  },
  rotas: {
    width: "90%",
    flexDirection: "row",
    marginLeft: "5%",
    marginTop: "2%",
    borderRadius: 25,
    backgroundColor: "lightgray",
  },
  iconRotas: {
    paddingLeft: 8
  },
})
