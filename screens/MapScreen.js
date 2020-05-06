import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';
import MenuButton from '../components/Tabs/MenuButton';
import MoreButton from '../components/Tabs/MoreButton';
import * as UsuarioRepositorio from "../repositorios/UsuarioRepositorio";
import io from 'socket.io-client';
import { RegionsMock } from '../mock/RegionsMock';


export default class MapScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: null,
        longitude: null,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      },
      regionPassageiro: {
        latitude: null,
        longitude: null,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      },
      data: '',
      socket: io('https://:8081')
    }

    this.state.socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'))

  
    this.state.socket.on('chat.message', (data) => {
      if(this.state.data.tipo === 1) 
        this.setState({ regionPassageiro: data.region })
    })
    
  }

  async fetchData() {
    const dados = await UsuarioRepositorio.buscarTodos()
    this.setState({ data: dados[0] })
  }

  async map() {
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

    const myId = Date.now();

    if(this.state.data.tipo === 0) {
      this.state.socket.emit('chat.message', {
        id: myId,
        tipoUser: this.state.data.tipo,
        region: this.state.region
      })
    } 
  }

  componentDidMount() {
    this.map()
    this.fetchData()
  }

  updateRegion = (region) => {

    this.setState({ region, regionPassageiro: region });
    
  }

  onRegionChange(region) {
    this.setState({
      region: region
    });
  }

  render() {
    const { data, region, regionPassageiro } = this.state;
    if (this.state.region.latitude) {
      if (this.state.data.tipo !== 0) {
        return (
          <SafeAreaView style={styles.container}>
            <MenuButton onPress={() => this.props.navigation.toggleLeftDrawer()} />
            <MoreButton onPress={() => this.props.navigation.toggleRightDrawer()} />
            <MapView
              fitToElements={0}
              style={styles.map}
              region={ data && data.tipo === 0 ? region : regionPassageiro}
              onRegionChangeCompletee={region => {
                this.setState({ region });
              }}
              rotateEnabled={false}
            >
              {regionPassageiro && regionPassageiro.latitude && regionPassageiro.longitude && 
              <Marker 
                
                coordinate={{latitude: regionPassageiro.latitude, longitude: regionPassageiro.longitude}}
                image={require('../assets/images/minivan.png')}
              />}
            </MapView>
            <View style={styles.mapDrawerOverlay} />
            <View style={styles.mapDrawerOverlayRight} />
          </SafeAreaView>
        );
      }
      return (
        <SafeAreaView style={styles.container}>
          <MenuButton onPress={() => this.props.navigation.toggleLeftDrawer()} />
          <MoreButton onPress={() => this.props.navigation.toggleRightDrawer()} />
          <MapView
            style={styles.mapM}
            region={this.state.region}
            showsUserLocation={true}
            onUserLocationChange={() => {
              this.map();
              //console.log(this.state.region);
            }}
            // onRegionChangeCompletee={region => {
            //   this.updateRegion(region);
            //   //this.setState({ region });
            // }}
            rotateEnabled={false}
          />
          <View style={styles.mapDrawerOverlay} />
          <View style={styles.mapDrawerOverlayRight} />
        </SafeAreaView>
      )
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
    height: "100%",
  },
  mapM: {
    width: Dimensions.get("window").width,
    height: "100%",
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
})
