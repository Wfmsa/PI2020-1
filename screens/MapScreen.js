import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  Switch,
  Alert,
  TouchableOpacity,
} from 'react-native';
import MenuButton from '../components/Tabs/MenuButton';
import MoreButton from '../components/Tabs/MoreButton';
import * as UsuarioRepositorio from "../repositorios/UsuarioRepositorio";
import io from 'socket.io-client';
import * as UsuarioApi from '../utils/apis/UsuariosAPI';
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
      regionMotorista: {
        latitude: null,
        longitude: null,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      },
      positionPassageiro: {
        latitude: null,
        longitude: null,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      },
      isSharingLocation: null,
      data: '',
      socket: io('http://192.168.25.7:8086'),
      lastEmition: Date.now(),
      toggle: false,
    }

    this.state.socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'))
  
    this.state.socket.on('chat.message', (data) => {
      if(this.state.data.tipo === 1) 
        if(!this.state.isSharingLocation)
          this.setState({ isSharingLocation: true })
        else if (!data.region)
          this.setState({ isSharingLocation: false })
        this.setState({ positionPassageiro: data.region })
    })
    
  }

  componentDidMount() {
    this.getInitialRegion();
    this.fetchData()
  }

  async fetchData() {
    const dados = await UsuarioRepositorio.buscarTodos()
    this.setState({ data: dados[0] })
  }

  getInitialRegion() {
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

  async map() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const myId = Date.now();

        const tempoUltimaEmicao = Date.now() - this.state.lastEmition
        const tempoUltimaEmicaoDate = new Date(tempoUltimaEmicao);

        console.log(tempoUltimaEmicaoDate.getSeconds() >= 10)

        if(tempoUltimaEmicaoDate.getSeconds() >= 10) {
          this.state.socket.emit('chat.message', {
            id: myId,
            tipoUser: this.state.data.tipo,
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.0143,
              longitudeDelta: 0.0134,
            }
          })
          this.setState({ lastEmition: Date.now() })
        }

      },
      (error) => {
        console.warn(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    )
  }

  updateRegion = (region) => {

    this.setState({ region, positionPassageiro: region });
    
  }

  onRegionChange(region) {
    this.setState({
      region: region
    });
  }

  finalizaTransportAlert = () => {
    Alert.alert(
      "Atenção!",
      "Ao clicar em \"Continuar\" todos os status dos seus passageiros serão restaurados",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Continuar", onPress: () => {
          this.finalizarTransporte()
          console.log("Continuar Pressed") 
        }}
      ],
      { cancelable: false }
    );
  }

  finalizarTransporte = () => {
    const { toggle } = this.state;
    const dados = {
      "id": this.state.data.id,
      "status": 0
    }
    UsuarioApi.updateTodosPassageiros(dados);
    this.setState({ toggle: !toggle});

    const myId = Date.now();
    this.state.socket.emit('chat.message', {
      id: myId,
      tipoUser: this.state.data.tipo,
      region: null
    })
  }

  irParaLocalizacaoTransporte = async () => {
    const { isSharingLocation, positionPassageiro } = this.state;

    if(isSharingLocation) {
      await this.setState({ positionTransportePassageiro: positionPassageiro })
      this.setState({ positionTransportePassageiro: null })
    }
    else {
      Alert.alert(
        "Atenção!",
        "O seu motorista não está compartilhando a localização!",
        [
          { text: "Ok", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }
  }

  render() {
    const { toggle, data, region, positionPassageiro, positionTransportePassageiro } = this.state;
    if (region.latitude) {
      if (data.tipo !== 0) {
        return (
          <SafeAreaView style={styles.container}>
            <MenuButton onPress={() => this.props.navigation.toggleLeftDrawer()} />
            <MoreButton onPress={() => this.props.navigation.toggleRightDrawer()} />
            <MapView
              style={styles.map}
              initialRegion={ region }
              region={ positionTransportePassageiro }
              rotateEnabled={false}
              showsUserLocation={true}
            >
              {positionPassageiro && positionPassageiro.latitude && positionPassageiro.longitude && 
                <Marker 
                  coordinate={{latitude: positionPassageiro.latitude, longitude: positionPassageiro.longitude}}
                  image={require('../assets/images/minivan.png')}
                />
              }
            </MapView>
            <TouchableOpacity style={[styles.toggleBox, styles.localVanBox]} onPress={() => this.irParaLocalizacaoTransporte()}>
              <Text style={styles.txtlocalVan}>
                Ir para localização do transporte
              </Text>
            </TouchableOpacity>
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
            initialRegion={region}
            followsUserLocation={true}
            showsUserLocation={true}
            onUserLocationChange={() => {
              toggle && this.map();
            }}
            rotateEnabled={false}
          />
          <View style={styles.toggleBox}>
            <Switch
              style={styles.switch}
              trackColor={{ false: "#767577", true: "#767577" }}
              thumbColor={toggle ? "#00ff1e" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                toggle ? this.finalizaTransportAlert() :  this.setState({ toggle: !toggle});
              }}
              value={toggle}
            />
            <Text style={styles.txtSwitch}>
              {toggle? "Finalizar transporte" : "Iniciar transporte"}
            </Text>
          </View>
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
  toggleBox: {
    zIndex: 9,
    position: "absolute",
    bottom: '6%',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    width: "68%",
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50
  },
  localVanBox: {
    elevation: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  switch: {
    transform: [{ scaleX: 1.75 }, { scaleY: 1.75 }]
  },
  txtSwitch: {
    width: '72%',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
  },
  txtlocalVan: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
  }
})
